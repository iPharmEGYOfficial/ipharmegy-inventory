function Item(props = {}) {
  return {
    type: "Item",
    itemId: props.itemId || null,
    itemCode: props.itemCode || "",
    itemNameAr: props.itemNameAr || "",
    itemNameEn: props.itemNameEn || "",
    group1: props.group1 || "",
    group2: props.group2 || "",
    unit: props.unit || "",
    isDrug: props.isDrug || false,
    source: props.source || "ipharmegy"
  };
}

module.exports = Item;
