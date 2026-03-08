function ShamelImportBatch(props = {}) {
  return {
    type: "ShamelImportBatch",
    importId: props.importId || null,
    importDate: props.importDate || null,
    sourceSystem: "shamel-plus",
    mode: "import-only",
    status: props.status || "pending"
  };
}

module.exports = ShamelImportBatch;
