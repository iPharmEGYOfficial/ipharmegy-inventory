module.exports = [
  { sourceTable: "CLASSES", sourceColumn: "CLS_ID", targetEntity: "Item", targetField: "itemId" },
  { sourceTable: "CLASSES", sourceColumn: "CLS_NAME", targetEntity: "Item", targetField: "itemNameAr" },
  { sourceTable: "CLS_UNIT_BARCODE", sourceColumn: "BARCODE", targetEntity: "Barcode", targetField: "barcode" },
  { sourceTable: "STORES", sourceColumn: "STOR_ID", targetEntity: "Store", targetField: "storeId" },
  { sourceTable: "STORAG_QTY", sourceColumn: "QTY", targetEntity: "StockQty", targetField: "qty" },
  { sourceTable: "STOR_TRANS", sourceColumn: "TRANS_NO", targetEntity: "StockTransaction", targetField: "transId" },
  { sourceTable: "STOR_TRANS_DET", sourceColumn: "CLS_ID", targetEntity: "StockTransactionLine", targetField: "itemId" }
];
