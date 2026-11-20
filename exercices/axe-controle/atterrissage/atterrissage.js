// @ts-check

export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;

/**
 * Calcule la vitesse verticale en tenant compte du vent.
 */
export function verticalSpeed(wind) {
  return DESCENT_SPEED + wind;
}

/**
 * Calcule l'altitude suivante du drone.
 */
export function nextAltitude(altitude, wind) {
  let x = altitude + DESCENT_SPEED + wind;
  if (x < 0) return 0;
  else return x;
}

/**
 * Génère une valeur aléatoire de vent.
 */
export function randomWind() {
  return Math.random() * MAX_WIND;
}

/**
 * Simule un atterrissage et compte sa durée.
 */
export function landingDuration(startAltitude) {
  let seconds = 0;
  while (startAltitude > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    seconds++;
  }
  return seconds;
}

/**
 * Indique si le drone atterrit avant l'épuisement de sa batterie.
 */
export function hasGracefullyLanded(startAltitude, battery) {
  let altitude = startAltitude;
  while (altitude > 0 && battery > 0) {
    altitude = nextAltitude(altitude, randomWind());
    battery--;
  }
  return altitude === 0;
}
