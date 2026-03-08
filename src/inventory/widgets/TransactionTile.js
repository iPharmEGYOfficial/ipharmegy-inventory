function TransactionTile(props = {}) {
  return { type: "TransactionTile", title: props.title || "Transaction", value: props.value || "" };
}
module.exports = TransactionTile;
