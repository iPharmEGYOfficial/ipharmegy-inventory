function ComplianceMap(props = {}) {
  return {
    type: "ComplianceMap",
    sourceTable: props.sourceTable || "",
    sourceColumn: props.sourceColumn || "",
    targetEntity: props.targetEntity || "",
    targetField: props.targetField || "",
    mode: "mapping-only"
  };
}

module.exports = ComplianceMap;
