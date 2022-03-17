import wounded from "./wounded.js";

Hooks.once("init", () => {
  Hooks.on("updateActor", wounded);
});
