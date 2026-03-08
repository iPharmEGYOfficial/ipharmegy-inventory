module.exports = {
  name: "Transaction Engine",
  entities: ["StockTransaction", "StockTransactionLine"],
  sourceTables: ["STOR_TRANS", "STOR_TRANS_DET", "STOR_TRANS_SN_TABLE"],
  mode: "operational"
};
