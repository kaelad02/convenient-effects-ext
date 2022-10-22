import { debug } from "./util.js";

export default function addApplyButton(app, html) {
  debug("addApplyButton function called");

  const itemCard = html[0].querySelector(".item-card");
  if (itemCard) {
    debug("found an item card");

    // check if this item has a Convenient Effect
    const name = itemCard.querySelector(".item-name")?.textContent;
    if (game.dfreds.effectInterface.findEffectByName(name)) {
      debug("item has a CE, adding button");

      // build a button
      const button = document.createElement("button");
      button.textContent = "Add Convenient Effect";
      button.onclick = () => game.dfreds.effectInterface.toggleEffect(name);
      // add button to end of card-buttons
      itemCard.querySelector(".card-buttons").append(button);
    }
  }
}
