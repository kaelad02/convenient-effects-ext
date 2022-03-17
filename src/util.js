const MODULE_ID = "convenient-effects-ext";

export function log(...args) {
  console.log(MODULE_ID, "|", ...args);
}

export function debug(...args) {
  const enabled = game.modules
    .get("_dev-mode")
    ?.api?.getPackageDebugValue(MODULE_ID);

  if (enabled) log(...args);
}
