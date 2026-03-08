const fieldMap = require("./shamel-field-map");

module.exports = {
  entity: "StockTransaction",
  tables: ["STOR_TRANS", "STOR_TRANS_DET", "STOR_TRANS_SN_TABLE"],
  map: fieldMap.filter(x => x.targetEntity === "StockTransaction" || x.targetEntity === "StockTransactionLine")
};
