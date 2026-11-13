// @ts-check

/**
 * Convertit un relevé en nombre.
 * @param {any} value la valeur du pluviometre dans un format inconnu
 * @returns {number} la valeur du pluviometre, format nombre
 */
export function readRainfall(value) {
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 * @param {*} morning la valeur du pluviometre du matin dans un format inconnu
 * @param {*} evening la valeur du pluviometre du soir dans un format inconnu
 * @returns {number} la some des valeurs de la journée
 */
export function totalRainfall(morning, evening) {
  return Number(morning) + Number(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 * @param {number} hour l'heure du relevé
 * @returns {boolean} true si l'heure est dans les multiples de 3
 */
export function isScheduledHour(hour) {
  return hour % 3 == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 * @param {*} value  la valeur du pluviometre dans un format inconnu
 * @returns {boolean} true si la valeur est NaN
 */
export function isFaultyReading(value) {
  return isNaN(Number(value));
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 * @param {*} manual la valeur du pluviometre récoltée manuellement dans un format inconnu
 * @param {*} automatic la valeur du pluviometre récoltée automatiquement dans un format inconnu
 * @returns {boolean} true si les 2 valeurs sont semblables après conversion
 */
export function isConfirmedReading(manual, automatic) {
  return Number(manual) == Number(automatic);
}
