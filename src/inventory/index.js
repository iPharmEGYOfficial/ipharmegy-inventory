module.exports = {
  shell: require("./inventory-shell"),
  map: require("./inventory-map"),
  routes: require("./inventory-routes"),
  status: require("./inventory-status"),
  context: require("./inventory-context"),
  modules: {
    itemMaster: require("./modules/item-master"),
    barcodeEngine: require("./modules/barcode-engine"),
    storeEngine: require("./modules/store-engine"),
    stockEngine: require("./modules/stock-engine"),
    expiryEngine: require("./modules/expiry-engine"),
    transactionEngine: require("./modules/transaction-engine"),
    shamelBridgeEngine: require("./modules/shamel-bridge-engine"),
    complianceEngine: require("./modules/compliance-engine"),
    simulationEngine: require("./modules/simulation-engine")
  },
  adapters: {
    tables: require("./adapters/shamel-tables"),
    fieldMap: require("./adapters/shamel-field-map"),
    policy: require("./adapters/shamel-import-policy"),
    itemAdapter: require("./adapters/shamel-item-adapter"),
    stockAdapter: require("./adapters/shamel-stock-adapter"),
    transactionAdapter: require("./adapters/shamel-transaction-adapter")
  },
  services: {
    itemService: require("./services/item-service"),
    barcodeService: require("./services/barcode-service"),
    storeService: require("./services/store-service"),
    stockService: require("./services/stock-service"),
    expiryService: require("./services/expiry-service"),
    transactionService: require("./services/transaction-service"),
    importService: require("./services/import-service")
  },
  compliance: require("./compliance/compliance-rules"),
  simulation: require("./simulation/simulation-scenarios"),
  pages: {
    ItemsPage: require("./pages/ItemsPage"),
    BarcodesPage: require("./pages/BarcodesPage"),
    StoresPage: require("./pages/StoresPage"),
    StockPage: require("./pages/StockPage"),
    ExpiryPage: require("./pages/ExpiryPage"),
    TransactionsPage: require("./pages/TransactionsPage"),
    ShamelImportPage: require("./pages/ShamelImportPage"),
    CompliancePage: require("./pages/CompliancePage"),
    SimulationPage: require("./pages/SimulationPage")
  },
  widgets: {
    ItemTile: require("./widgets/ItemTile"),
    StoreTile: require("./widgets/StoreTile"),
    StockTile: require("./widgets/StockTile"),
    ExpiryTile: require("./widgets/ExpiryTile"),
    TransactionTile: require("./widgets/TransactionTile"),
    ImportTile: require("./widgets/ImportTile")
  }
};
