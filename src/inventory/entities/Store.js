function Store(props = {}) {
  return {
    type: "Store",
    storeId: props.storeId || null,
    storeCode: props.storeCode || "",
    storeName: props.storeName || "",
    branch: props.branch || "",
    source: props.source || "ipharmegy"
  };
}

module.exports = Store;
