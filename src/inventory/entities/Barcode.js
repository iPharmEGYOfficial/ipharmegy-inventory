function Barcode(props = {}) {
  return {
    type: "Barcode",
    itemId: props.itemId || null,
    barcode: props.barcode || "",
    unit: props.unit || "",
    source: props.source || "ipharmegy"
  };
}

module.exports = Barcode;
