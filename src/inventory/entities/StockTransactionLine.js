function StockTransactionLine(props = {}) {
  return {
    type: "StockTransactionLine",
    transId: props.transId || null,
    itemId: props.itemId || null,
    qty: props.qty || 0,
    batchNo: props.batchNo || "",
    expiryDate: props.expiryDate || null,
    source: props.source || "ipharmegy"
  };
}

module.exports = StockTransactionLine;
