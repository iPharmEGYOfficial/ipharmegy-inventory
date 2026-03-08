const fieldMap = require("./shamel-field-map");

module.exports = {
  entity: "Item",
  tables: ["CLASSES", "CLS_UNIT_BARCODE", "CLS_PRICE"],
  map: fieldMap.filter(x => x.targetEntity === "Item" || x.targetEntity === "Barcode")
};
