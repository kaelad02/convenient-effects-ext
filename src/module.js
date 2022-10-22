import addApplyButton from "./apply.js";
import { addButtonEnabled, initSettings } from "./settings.js";
import { MODULE_ID } from "./util.js";
import wounded from "./wounded.js";

Hooks.once("init", () => {
  initSettings();
  Hooks.on("updateActor", wounded);
  if (addButtonEnabled) Hooks.on("renderChatMessage", addApplyButton);
});

// register a debug flag with Developer Mode
Hooks.once("devModeReady", (api) => api.registerPackageDebugFlag(MODULE_ID));
