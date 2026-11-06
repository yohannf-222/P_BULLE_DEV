// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 */
export function isKnownUniversity(university) {
  // TODO
}

/**
 * Convertit un titre en niveau numérique.
 */
export function titleLevel(title) {
  // TODO
}

/**
 * Indique si une université exige un Master.
 */
export function requiresMaster(university) {
  // TODO
}

/**
 * Indique si un visiteur est considéré comme fiable.
 */
export function isTrusted(university, title) {
  // TODO
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
export function welcomeMessage(university, title) {
  // TODO
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
export function allTrusted(universities, titles) {
  // TODO
}
