// @ts-check

/**
 * Valide une quantité d'énergie.
 */
export function validateEnergy(energy) {
  if (energy < 0) throw new Error("Énergie invalide");
  else return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
 */
export function safeEnergyCheck(energy) {
  try {
    validateEnergy(energy);
    return "Énergie valide";
  } catch {
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 */
export function validateGateCode(code) {
  switch (code) {
    case "ALPHA":
      return "ALPHA";
      break;

    case "BETA":
      return "BETA";
      break;

    case "OMEGA":
      return "OMEGA";
      break;

    default:
      throw new Error("Code inconnu");
  }
}
/**
 * Vérifie un code de porte sans propager l'exception.
 */
export function safeGateCheck(code) {
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
export function countValidAttempts(text) {
  let x = 0;
  for (let c of text) {
    if (c == "A" || c == "B") x++;
  }
  return x;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
export function attemptsBeforeLock(sequence) {
  let x = 0;
  let y = 0;
  for (let c of sequence) {
    if (c == "X") {
      x++;
    }
    y++;
    if (x == 3) {
      return y;
    }
  }
  return y;
}
