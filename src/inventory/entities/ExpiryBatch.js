function ExpiryBatch(props = {}) {
  return {
    type: "ExpiryBatch",
    itemId: props.itemId || null,
    batchNo: props.batchNo || "",
    expiryDate: props.expiryDate || null,
    qty: props.qty || 0,
    source: props.source || "ipharmegy"
  };
}

module.exports = ExpiryBatch;
