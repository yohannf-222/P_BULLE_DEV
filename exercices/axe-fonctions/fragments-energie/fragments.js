// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
 */
export function sumFragments(...fragments) {
  let sum = 0;
  for (let val of fragments) {
    sum += val;
  }
  return sum;
}

/**
 * Compte le nombre de fragments reçus.
 */
export function countFragments(...fragments) {
  return fragments.length;
}

/**
 * Calcule la moyenne des fragments reçus.
 */
export function averageFragments(...fragments) {
  return sumFragments(...fragments) / fragments.length;
}

/**
 * Ajoute la somme des fragments à une valeur de base.
 */
export function totalWithBase(base, ...fragments) {
  return sumFragments(base, ...fragments);
}

/**
 * Construit un libellé indiquant le nombre de valeurs.
 */
export function formulaLabel(name, ...values) {
  return `${name} : ${values.length} valeurs`;
}

/**
 * Prépare un résumé contenant la somme des valeurs.
 */
export function prepareMixture(name, ...values) {
  return `${name} = ${sumFragments(...values)}`;
}
