const { loadLiveInventory } = require("./inventory-live-engine");

function safeNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

async function run() {
  try {
    const result = await loadLiveInventory();

    const summary = {
      mode: result.mode,
      safeMode: result.safeMode,
      sourceDatabase: result.sourceDatabase,
      totals: {
        items: result.inventoryView.length,
        totalQty: result.inventoryView.reduce((sum, x) => sum + safeNumber(x.totalQty), 0),
        totalValue: result.inventoryView.reduce((sum, x) => sum + safeNumber(x.totalValue), 0)
      },
      lowStockCandidates: result.inventoryView
        .filter(x => safeNumber(x.totalQty) <= 0)
        .map(x => ({
          itemId: x.itemId,
          itemCode: x.itemCode,
          itemNameAr: x.itemNameAr,
          totalQty: x.totalQty
        })),
      topStockByQty: result.inventoryView
        .slice()
        .sort((a, b) => safeNumber(b.totalQty) - safeNumber(a.totalQty))
        .slice(0, 5)
        .map(x => ({
          itemId: x.itemId,
          itemCode: x.itemCode,
          itemNameAr: x.itemNameAr,
          totalQty: x.totalQty,
          barcodeCount: x.barcodeCount
        })),
      timestamp: new Date().toISOString()
    };

    console.log(JSON.stringify(summary, null, 2));
  } catch (err) {
    console.error("LIVE INVENTORY SUMMARY FAILED");
    console.error(err);
    process.exitCode = 1;
  }
}

run();
