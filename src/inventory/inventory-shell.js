function InventoryShell() {
  return {
    type: "InventoryShell",
    module: "inventory",
    name: "iPharmEGY Inventory Engine",
    sections: [
      "Items",
      "Barcodes",
      "Stores",
      "Stock Quantities",
      "Expiry Tracking",
      "Transactions",
      "Shamel Import",
      "Compliance Mapping",
      "Simulation Layer"
    ]
  };
}

module.exports = InventoryShell;
