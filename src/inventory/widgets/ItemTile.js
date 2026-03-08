function ItemTile(props = {}) {
  return { type: "ItemTile", title: props.title || "Item", value: props.value || "" };
}
module.exports = ItemTile;
