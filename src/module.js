import addApplyButton from "./apply.js";
import wounded from "./wounded.js";

Hooks.once("init", () => {
  Hooks.on("updateActor", wounded);
  Hooks.on("renderChatMessage", addApplyButton);
});

// register a debug flag with Developer Mode
Hooks.once("devModeReady", (api) => {
  api.registerPackageDebugFlag("convenient-effects-ext");
});
