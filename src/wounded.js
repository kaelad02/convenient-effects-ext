import { debug } from "./util.js";

// Add this as a hook on "updateActor"

export default async function wounded(actor, update, options, userId) {
  // only run hook on the user that updated the actor
  if (userId !== game.user.id) return;

  // only run hook if HP was changed (any of them)
  if (getProperty(update, "data.attributes.hp") === undefined) return;

  debug("actor HP updated, checking for wounded/dead states");
  const ei = game.dfreds.effectInterface;
  const hp = actor.data.data.attributes.hp;

  // Bloodied
  if (!actor.hasPlayerOwner) {
    const isBloodied = 0 < hp.value && hp.value <= (hp.max + hp.tempmax) / 2;
    const hasEffect = await ei.hasEffectApplied("Wounded", actor.uuid);

    debug(`isBloodied: ${isBloodied}, hasEffect: ${hasEffect}`);
    if (isBloodied !== hasEffect)
      await ei.toggleEffect("Wounded", { uuids: [actor.uuid] });
  }

  // Unconscious or Dead
  {
    const isDead = hp.value === 0;
    const effectName = actor.type === "character" ? "Unconscious" : "Dead";
    const hasEffect = await ei.hasEffectApplied(effectName, actor.uuid);

    debug(`isDead: ${isDead}, hasEffect: ${hasEffect}`);
    if (isDead !== hasEffect)
      await ei.toggleEffect(effectName, { overlay: true, uuids: [actor.uuid] });
  }
}
