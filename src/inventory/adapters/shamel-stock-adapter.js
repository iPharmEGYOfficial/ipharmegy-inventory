const fieldMap = require("./shamel-field-map");

module.exports = {
  entity: "StockQty",
  tables: ["STORAG_QTY", "INVENTORY", "STORES"],
  map: fieldMap.filter(x => x.targetEntity === "StockQty" || x.targetEntity === "Store")
};
