const { loadLiveInventory } = require("./inventory-live-engine");

async function run() {
  try {
    const result = await loadLiveInventory();

    console.log(JSON.stringify({
      mode: result.mode,
      safeMode: result.safeMode,
      sourceDatabase: result.sourceDatabase,
      extracted: result.extracted,
      injected: result.injected,
      inventoryItems: result.inventoryView.length,
      firstInventoryItem: result.inventoryView[0] || null,
      timestamp: new Date().toISOString()
    }, null, 2));
  } catch (err) {
    console.error("LIVE INVENTORY ENGINE FAILED");
    console.error(err);
    process.exitCode = 1;
  }
}

run();
