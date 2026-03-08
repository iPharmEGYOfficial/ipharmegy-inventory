function ExpiryTile(props = {}) {
  return { type: "ExpiryTile", title: props.title || "Expiry", value: props.value || "" };
}
module.exports = ExpiryTile;
