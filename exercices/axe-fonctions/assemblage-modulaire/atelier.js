// @ts-check

import { calculateEnergy, multiplyEnergy } from "./energie";
import { formatResult } from "./messages";

/**
 * Crée une synthèse à partir d'une énergie de base et d'un bonus.
 */
export function createSynthesis(name, base, bonus = 0) {
  return formatResult(name, calculateEnergy(base, bonus));
}

/**
 * Crée une synthèse avec une énergie multipliée.
 */
export function createBoostedSynthesis(name, base, factor = 2) {
  return formatResult(name, multiplyEnergy(base, factor));
}
