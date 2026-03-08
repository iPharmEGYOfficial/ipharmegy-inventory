module.exports = {
  name: "Expiry Engine",
  entities: ["ExpiryBatch"],
  sourceTables: ["DATE_PROD", "SN_TABLE"],
  mode: "operational"
};
