import { MODULE_ID } from "./util.js";

export var addButtonEnabled;

export function initSettings() {
  // register settings
  game.settings.register(MODULE_ID, "addButtonEnabled", {
    name: "Add Button to Chat",
    hint: "Whether or not to add a button to item chat cards to add the matching convenient effect.",
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    requiresReload: true,
  });

  // fetch settings
  addButtonEnabled = game.settings.get(MODULE_ID, "addButtonEnabled");
}
