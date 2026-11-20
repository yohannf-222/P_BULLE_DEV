// @ts-check

/**
 * Double une charge.
 */
export function doubleCharge(charge) {
  return charge * 2;
}

/**
 * Calcule une puissance à partir d'une base et d'un multiplicateur.
 */
export function forgePower(base, multiplier) {
  return base * multiplier;
}

/**
 * Stabilise une énergie avec un facteur, égal à 2 par défaut.
 */
export function stabilizeEnergy(energy, factor = 2) {
  return energy * factor;
}

/**
 * Construit un message de la Forge.
 */
export function forgeMessage(element, prefix = "Forge") {
  return `${prefix} : ${element}`;
}

/**
 * Calcule l'énergie restante après une perte.
 */
export function calculateOutput(energy, loss) {
  return energy - loss;
}

/**
 * Calcule puis amplifie l'énergie restante.
 */
export function boostedOutput(energy, loss, factor = 2) {
  return stabilizeEnergy(calculateOutput(energy, loss), factor);
}
