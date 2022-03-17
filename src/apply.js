import { debug } from "./util.js";

export default function addApplyButton(app, html) {
  debug("addApplyButton2 function called");

  const itemCard = html[0].querySelector(".item-card");
  if (itemCard) {
    debug("found an item card");
    // build a button
    const button = document.createElement("button");
    button.textContent = "Apply Convenient Effect";
    button.onclick = applyConvenientEffect;
    // add button to end of card-buttons
    itemCard.querySelector(".card-buttons").append(button);
  }
}

function applyConvenientEffect() {
  game.dfreds.effectInterface.toggleEffect("Bane");
}
