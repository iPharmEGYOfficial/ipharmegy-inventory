function StoreTile(props = {}) {
  return { type: "StoreTile", title: props.title || "Store", value: props.value || "" };
}
module.exports = StoreTile;
