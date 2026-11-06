// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 * @param {any} value valeur entrée
 * @returns {string} le type de la valeur donnée
 */
export function valueType(value) {
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 * @param {any} value valeur entrée
 * @returns {boolean} true si la valeur est undefined
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * Indique si la valeur est null.
 * @param {any} value valeur entrée
 * @returns {boolean} true si la valeur est null
 */
export function isNull(value) {
  return value === null;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 * @param {any} value valeur entrée
 * @returns {boolean} true si la valeur n'est ni undefined ni null
 */
export function hasKnownValue(value) {
  return (isNull(value) || isUndefined(value)) === false;
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 * @param {any} energy l'energie que l'on a
 * @param {any} minimumEnergy l'énergie qu'il faut afin d'en avoir assez
 * @returns {boolean} true si energy >= que minimumEnergy
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return Number(energy) >= Number(minimumEnergy);
}

/**
 * Compare strictement le nom de la zone attendue.
 * @param {string} zone nom de zone donnée
 * @param {string} expectedZone nom de la zone attendue
 * @returns {boolean} true si la zone est la même que expectedZone
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
