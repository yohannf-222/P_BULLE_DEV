// @ts-check

/**
 * Convertit une valeur en nombre.
 *
 * @param {any} value valeur d'entrée
 * @returns valeur de sortie, format nombre
 */
export function convertCode(value) {
  return Number(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 * @param {*} value1 1ere valeur donnée
 * @param {*} value2 2nde valeur donnée
 * @returns resultat d'une comparaison souple (bool)
 */
export function sameCodeLoose(value1, value2) {
  return value1 == value2;
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 * @param {*} value1 1ere valeur donnée
 * @param {*} value2 2nde valeur donnée
 * @returns resultat d'une comparaison stricte (bool)
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2;
}

/**
 * Indique si un code est pair.
 * @param {number} code valeur numerique donnée
 * @returns true/false suivant si le nombre est pair
 */
export function isEvenCode(code) {
  return Number(code) % 2 == 0;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 * @param {any} value l'entrée de l'utilisateur
 * @returns true si la valeur ne peut etre convertie en nombre
 */
export function isInvalidCode(value) {
  return isNaN(Number(value));
}
