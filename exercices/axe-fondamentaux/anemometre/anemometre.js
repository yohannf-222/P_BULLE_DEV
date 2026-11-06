// @ts-check

const kmhToMsRatio = 3.6;

/**
 * Convertit une vitesse de km/h en m/s.
 * @param {number} speedKmh la vitesse en km/h
 * @returns {number} la vitesse en m/s
 */
export function kmhToMs(speedKmh) {
  return speedKmh * kmhToMsRatio;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 * @param {number} gustKmh la vitesse en km/h de la rafale
 * @param {number} averageKmh la vitesse en km/h du vent
 * @returns {number} Différence entre la rafale et le vent moyen
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 * @param {number} speed1 Une des vitesses avec laquelle on fait la moyenne, la 1ere
 * @param {number} speed2 Une des vitesses avec laquelle on fait la moyenne, la 2eme
 * @param {number} speed3 Une des vitesses avec laquelle on fait la moyenne, la 3eme
 * @returns la moyenne entre les 3 vitesses données
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 */
export function isStormAlert(speedKmh) {
  // TODO
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
  // TODO
}
