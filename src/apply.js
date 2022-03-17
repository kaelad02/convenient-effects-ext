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

/*
const roll = await item.roll({configureDialog: false});
if(!roll) return;

let html = $(roll.data.content);
let buttons = html.find(".card-buttons")[0];

const actorDC = actor.data.data.attributes.spelldc;
const newButtons = [
    $(`<button data-action="save" data-ability="dex">Saving Throw DC ${actorDC} Dexterity (Prone)</button>`)[0],
    $(`<button data-action="save" data-ability="str">Saving Throw DC ${actorDC} Strength (Pushed 15ft)</button>`)[0]
];

buttons.append(...newButtons);

await roll.update({'content': html.prop("outerHTML")});
*/
