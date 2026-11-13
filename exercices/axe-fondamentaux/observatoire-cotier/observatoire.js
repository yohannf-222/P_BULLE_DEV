// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 */
/**
 *
 * @param {*} value valeur de type inconnu
 * @returns {string} type de la variable value
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 * @param {number} count le comptage donné
 * @returns {boolean} true si count est undefined ou null
 */
export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 * @param {number} count le comptage donné
 * @returns {boolean} true si count est null
 */
export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 * @param {number} count le comptage donné
 * @returns {boolean} true si count n'est ni undefined ni null
 */
export function hasBirdCount(count) {
  return !(count === undefined || count === null);
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 * @param {number} northCount nombre d'oiseaux au nord
 * @param {number} southCount nombre d'oiseaux au sud
 * @returns {number} la somme des 2
 */
export function totalBirds(northCount, southCount) {
  if (northCount === undefined) northCount = 0;
  if (southCount === undefined) southCount = 0;
  return Number(northCount) + Number(southCount);
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 * @param {number} height valeur donnée
 * @returns {boolean} true si la valeur est null
 */
export function isValidWaveHeight(height) {
  return Number(height) === height && !Number.isNaN(height);
}
