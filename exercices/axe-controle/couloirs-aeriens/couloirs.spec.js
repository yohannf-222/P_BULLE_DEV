import { describe, expect, test } from '@jest/globals';
import {
  validateAltitude,
  countAtAltitude,
  checkCorridor,
  checkAirspace,
  airspaceReport,
} from './couloirs.js';

describe('validateAltitude', () => {
  test('accepte les trois altitudes autorisées', () => {
    expect(validateAltitude(50)).toBe(50);
    expect(validateAltitude(100)).toBe(100);
    expect(validateAltitude(150)).toBe(150);
  });

  test('lance une erreur pour une autre altitude', () => {
    expect(() => validateAltitude(75)).toThrow('Altitude interdite : 75 m');
    expect(() => validateAltitude(0)).toThrow('Altitude interdite : 0 m');
  });
});

describe('countAtAltitude', () => {
  test('compte les drones à une altitude donnée', () => {
    expect(countAtAltitude([50, 100, 50, 150, 50], 50)).toBe(3);
    expect(countAtAltitude([50, 100, 50, 150, 50], 150)).toBe(1);
    expect(countAtAltitude([50, 100], 150)).toBe(0);
    expect(countAtAltitude([], 100)).toBe(0);
  });
});

describe('checkCorridor', () => {
  test('retourne le nombre de drones si le couloir est sûr', () => {
    expect(checkCorridor([100, 100, 100, 100, 100], 100)).toBe(5);
    expect(checkCorridor([50, 100], 150)).toBe(0);
  });

  test('lance une erreur au-delà de 5 drones', () => {
    expect(() => checkCorridor([100, 100, 100, 100, 100, 100], 100)).toThrow('Collision à 100 m');
  });
});

describe('checkAirspace', () => {
  test('valide un espace aérien sûr', () => {
    expect(checkAirspace([50, 50, 50, 50, 50, 100, 100, 150])).toBe('Espace aérien sûr');
    expect(checkAirspace([])).toBe('Espace aérien sûr');
  });

  test('laisse passer l erreur d altitude', () => {
    expect(() => checkAirspace([50, 120, 150])).toThrow('Altitude interdite : 120 m');
  });

  test('laisse passer l erreur de collision', () => {
    expect(() => checkAirspace([150, 150, 150, 150, 150, 150, 50])).toThrow('Collision à 150 m');
  });

  test('vérifie les altitudes avant les collisions', () => {
    expect(() => checkAirspace([50, 50, 50, 50, 50, 50, 42])).toThrow('Altitude interdite : 42 m');
  });
});

describe('airspaceReport', () => {
  test('ne laisse jamais sortir d erreur', () => {
    expect(airspaceReport([50, 100, 150])).toBe('Espace aérien sûr');
    expect(airspaceReport([50, 120])).toBe('Alerte : Altitude interdite : 120 m');
    expect(airspaceReport([50, 50, 50, 50, 50, 50])).toBe('Alerte : Collision à 50 m');
  });
});
