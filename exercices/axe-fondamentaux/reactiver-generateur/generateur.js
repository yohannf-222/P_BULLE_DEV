// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 * @param {number} maxEnergy energie maximale
 * @param {number} currentEnergy l'energie que l'on a
 *
 * @returns {number} ce qui reste jusqu'au max
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy;
}

/**
 * Calcule le pourcentage d'énergie disponible.
 * @param {number} maxEnergy energie maximale
 * @param {number} currentEnergy énergie que le generateur a
 * @returns
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie disponible après une recharge.
 * @param {number} currentEnergy énergie que le generateur a
 * @param {number} recharge ce qui s'ajoute à la recharge
 * @returns
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 * @param {number} currentEnergy énergie que le generateur a
 * @returns pourcentage de completion
 */
export function isGeneratorReady(currentEnergy) {
  if (currentEnergy >= 500) return true;
  else return false;
}

/**
 * Construit le message d'état du générateur.
 * @param {string} name nom du generateur
 * @param {number} currentEnergy énergie que le generateur a
 * @returns
 */
export function generatorStatus(name, currentEnergy) {
  return `${name} possède ${currentEnergy} unités d'énergie.`;
}
