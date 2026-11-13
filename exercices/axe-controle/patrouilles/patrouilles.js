// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
export function sumRounds(numberOfRounds) {
  let nb = 0;
  for (let i = 0; i <= numberOfRounds; i++) {
    nb += i;
  }
  return nb;
}

/**
 * Compte le nombre de caractères d'un code.
 */
export function countSymbols(code) {
  let nb = 0;
  for (let char of code) nb++;
  return nb;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
export function countX(code) {
  let nb = 0;
  for (let char of code) {
    if (char === "X") {
      nb++;
    }
  }
  return nb;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
  let x = 0;
  while (consumption <= energy) {
    energy -= consumption;
    x++;
  }
  return x;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  // TODO
}
