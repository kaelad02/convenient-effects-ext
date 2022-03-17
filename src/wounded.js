// Add this as a hook on "updateActor"

export default async function wounded(actor, update, options, userId) {
  // only run hook on the user that updated the actor
  if (userId !== game.user.id) return;

  // only run hook if the HP value was changed
  if (getProperty(update, "data.attributes.hp.value") === undefined) return;

  const ei = game.dfreds.effectInterface;
  const hp = actor.data.data.attributes.hp;

  // Bloodied
  if (!actor.hasPlayerOwner) {
    const isBloodied = 0 < hp.value && hp.value <= hp.max / 2;
    const hasEffect = await ei.hasEffectApplied("Wounded", actor.uuid);

    if (isBloodied !== hasEffect)
      await ei.toggleEffect("Wounded", { uuids: [actor.uuid] });
  }

  // Unconscious or Dead
  {
    const isDead = hp.value === 0;
    const effectName = actor.type === "character" ? "Unconscious" : "Dead";
    const hasEffect = await ei.hasEffectApplied(effectName, actor.uuid);

    if (isDead !== hasEffect)
      await ei.toggleEffect(effectName, { overlay: true, uuids: [actor.uuid] });
  }
}
