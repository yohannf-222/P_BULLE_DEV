import { describe, expect, test } from '@jest/globals';
import { accessMessage, doorStatus, zoneName, alertLevel } from './portes.js';

describe('accessMessage', () => {
  test('autorise à partir du niveau 5', () => {
    expect(accessMessage(5)).toBe('Accès autorisé');
    expect(accessMessage(8)).toBe('Accès autorisé');
    expect(accessMessage(4)).toBe('Accès refusé');
  });
});

describe('doorStatus', () => {
  test('retourne l état de la porte', () => {
    expect(doorStatus(true)).toBe('Ouverte');
    expect(doorStatus(false)).toBe('Fermée');
  });
});

describe('zoneName', () => {
  test('retourne le nom de la zone', () => {
    expect(zoneName('N')).toBe('Les Fondations');
    expect(zoneName('E')).toBe('Les Archives');
    expect(zoneName('SE')).toBe('La Forge');
    expect(zoneName('SO')).toBe('La Citadelle');
    expect(zoneName('O')).toBe('La Faille');
    expect(zoneName('X')).toBe('Zone inconnue');
  });
});

describe('alertLevel', () => {
  test('retourne le bon niveau d alerte', () => {
    expect(alertLevel(10)).toBe('CRITIQUE');
    expect(alertLevel(20)).toBe('FAIBLE');
    expect(alertLevel(49)).toBe('FAIBLE');
    expect(alertLevel(50)).toBe('STABLE');
    expect(alertLevel(79)).toBe('STABLE');
    expect(alertLevel(80)).toBe('OPTIMAL');
  });
});
