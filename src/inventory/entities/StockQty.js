function StockQty(props = {}) {
  return {
    type: "StockQty",
    itemId: props.itemId || null,
    storeId: props.storeId || null,
    qty: props.qty || 0,
    reservedQty: props.reservedQty || 0,
    source: props.source || "ipharmegy"
  };
}

module.exports = StockQty;
