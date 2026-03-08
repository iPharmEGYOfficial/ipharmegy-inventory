function StockTile(props = {}) {
  return { type: "StockTile", title: props.title || "Stock", value: props.value || "" };
}
module.exports = StockTile;
