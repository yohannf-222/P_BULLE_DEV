// @ts-check

export const MAX_DRONES_PER_CORRIDOR = 5;

/**
 * Valide une altitude autorisée.
 */
export function validateAltitude(altitude) {
  switch (altitude) {
    case 50:
    case 100:
    case 150:
      return altitude;
      break;
    default:
      throw new Error(`Altitude interdite : ${altitude} m`);
  }
}

/**
 * Compte les drones présents à une altitude.
 */
export function countAtAltitude(altitudes, altitude) {
  let x = 0;
  for (let i = 0; i < altitudes.length; i++) {
    if (altitudes[i] == altitude) {
      x++;
    }
  }
  return x;
}

/**
 * Vérifie qu'un couloir ne dépasse pas sa capacité.
 */
export function checkCorridor(altitudes, altitude) {
  let altitudeDroneCount = countAtAltitude(altitudes, altitude);

  if (altitudeDroneCount > 5) throw new Error(`Collision à ${altitude} m`);
  else return altitudeDroneCount;
}

/**
 * Vérifie les altitudes et la capacité de tous les couloirs.
 */
export function checkAirspace(altitudes) {
  for (let x of altitudes) {
    validateAltitude(x);
  }
  for (let x of altitudes) {
    checkCorridor(altitudes, x);
  }
  return "Espace aérien sûr";
}

/**
 * Produit un rapport sans propager les erreurs de validation.
 */
export function airspaceReport(altitudes) {
  try {
    return checkAirspace(altitudes);
  } catch (error) {
    return `Alerte : ${error.message}`;
  }
}
