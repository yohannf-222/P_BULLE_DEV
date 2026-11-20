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
  for (let i = 0; i < UNIVERSITIES.length; i++) {
    if (university == UNIVERSITIES[i]) return true;
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 */
export function titleLevel(title) {
  switch (title) {
    case "Bachelor":
      return 1;
      break;
    case "Master":
      return 2;
      break;
    default:
      return 0;
      break;
  }
}

/**
 * Indique si une université exige un Master.
 */
export function requiresMaster(university) {
  for (let u of MASTER_REQUIRED) {
    if (university == u) return true;
  }
  return false;
}

/**
 * Indique si un visiteur est considéré comme fiable.
 */
export function isTrusted(university, title) {
  let HasMasterWhenNeeded =
    (requiresMaster(university) && titleLevel(title) >= 2) ||
    !requiresMaster(university);

  return (
    HasMasterWhenNeeded &&
    isKnownUniversity(university) &&
    titleLevel(title) >= 1
  );
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
export function welcomeMessage(university, title) {
  if (!isKnownUniversity(university)) 
    return "Université inconnue";
  else if (titleLevel(title) == 0) 
    return "Titre inconnu";
  else if (requiresMaster(university) && titleLevel(title) < 2)
    return "Master requis";
  else 
    return "Bienvenue dans la Citadelle";
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
export function allTrusted(universities, titles) {
  for(let i = 0; i < universities.length; i++){
    if (!isTrusted(universities[i], titles[i])) return false;
  }
  return true;
}
