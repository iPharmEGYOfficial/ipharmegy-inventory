function ImportTile(props = {}) {
  return { type: "ImportTile", title: props.title || "Import", value: props.value || "" };
}
module.exports = ImportTile;
