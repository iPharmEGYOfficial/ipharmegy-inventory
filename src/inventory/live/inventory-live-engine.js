const path = require("path");

const coreData = path.resolve(__dirname, "../../../../ipharmegy-core/data");

const client = require(path.join(coreData, "sql/client"));
const queries = require(path.join(coreData, "sql/queries"));
const projector = require(path.join(coreData, "importers/shamel-v1-projector"));

const ItemRepository = require(path.join(coreData, "repositories/ItemRepository"));
const BarcodeRepository = require(path.join(coreData, "repositories/BarcodeRepository"));
const StoreRepository = require(path.join(coreData, "repositories/StoreRepository"));
const StockRepository = require(path.join(coreData, "repositories/StockRepository"));
const memoryStore = require(path.join(coreData, "repositories/memory-store"));

function resetMemory() {
  memoryStore.items.clear();
  memoryStore.barcodes.clear();
  memoryStore.stores.clear();
  memoryStore.stocks.clear();
}

function inject(table, rows) {
  rows.forEach(row => {
    const obj = projector.projectRow(table, row);
    if (!obj) return;

    if (obj.targetEntity === "Item") ItemRepository.save(obj);
    if (obj.targetEntity === "Barcode") BarcodeRepository.save(obj);
    if (obj.targetEntity === "Store") StoreRepository.save(obj);
    if (obj.targetEntity === "StockQty") StockRepository.save(obj);
  });
}

function safeNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function buildStoreIndex() {
  return StoreRepository.all().reduce((acc, store) => {
    acc[store.storeId] = store;
    return acc;
  }, {});
}

function buildInventoryView() {
  const storeIndex = buildStoreIndex();

  return ItemRepository.all().map(item => {
    const barcodes = BarcodeRepository.findByItem(item.itemId);
    const stockRows = StockRepository.findByItem(item.itemId);

    const totalQty = stockRows.reduce((sum, row) => sum + safeNumber(row.qty), 0);
    const totalValue = stockRows.reduce((sum, row) => sum + safeNumber(row.stockValue), 0);

    const stores = stockRows.map(row => {
      const store = storeIndex[row.storeId] || null;
      return {
        storeId: row.storeId,
        storeCode: row.storeCode,
        storeNameAr: row.storeNameAr,
        qty: safeNumber(row.qty),
        stockValue: safeNumber(row.stockValue),
        mappedStoreNameAr: store ? store.storeNameAr : null
      };
    });

    return {
      itemId: item.itemId,
      itemCode: item.itemCode,
      itemNameAr: item.itemNameAr,
      groupId: item.groupId,
      brandGroupId: item.brandGroupId,
      taxPercent: item.taxPercent,
      baseUnitName: item.baseUnitName,
      barcodeCount: barcodes.length,
      barcodes: barcodes.map(b => b.barcode),
      totalQty,
      totalValue,
      stores
    };
  });
}

async function loadLiveInventory() {
  resetMemory();

  const classes = await client.query(queries.classesTop10);
  const barcodes = await client.query(queries.barcodesTop10);
  const stores = await client.query(queries.storesTop10);
  const stock = await client.query(queries.stockTop10);

  inject("CLASSES", classes);
  inject("CLS_UNIT_BARCODE", barcodes);
  inject("STORES_TAB", stores);
  inject("STORAG_QTY", stock);

  const inventoryView = buildInventoryView();

  return {
    mode: "LIVE_INVENTORY_ENGINE",
    safeMode: "READ_ONLY",
    sourceDatabase: "AMANSOFTS_PLUS",
    extracted: {
      classes: classes.length,
      barcodes: barcodes.length,
      stores: stores.length,
      stock: stock.length
    },
    injected: {
      items: ItemRepository.all().length,
      barcodes: memoryStore.barcodes.size,
      stores: StoreRepository.all().length,
      stocks: memoryStore.stocks.size
    },
    inventoryView
  };
}

module.exports = {
  loadLiveInventory
};
