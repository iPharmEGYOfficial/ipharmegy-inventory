function StockTransaction(props = {}) {
  return {
    type: "StockTransaction",
    transId: props.transId || null,
    transType: props.transType || "",
    transDate: props.transDate || null,
    fromStoreId: props.fromStoreId || null,
    toStoreId: props.toStoreId || null,
    source: props.source || "ipharmegy"
  };
}

module.exports = StockTransaction;
