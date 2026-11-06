import { describe, expect, test } from '@jest/globals';
import {
  valueType,
  isUndefined,
  isNull,
  hasKnownValue,
  hasEnoughEnergy,
  isCorrectZone,
} from './diagnostic.js';

describe('valueType', () => {
  test('retourne le type JavaScript', () => {
    expect(valueType(42)).toBe('number');
    expect(valueType('Nexus')).toBe('string');
    expect(valueType(true)).toBe('boolean');
    expect(valueType(undefined)).toBe('undefined');
  });
});

describe('isUndefined', () => {
  test('distingue undefined des autres valeurs', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
  });
});

describe('isNull', () => {
  test('distingue null des autres valeurs', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
  });
});

describe('hasKnownValue', () => {
  test('retourne false uniquement pour null et undefined', () => {
    expect(hasKnownValue(null)).toBe(false);
    expect(hasKnownValue(undefined)).toBe(false);
    expect(hasKnownValue(0)).toBe(true);
    expect(hasKnownValue(false)).toBe(true);
    expect(hasKnownValue('')).toBe(true);
    expect(hasKnownValue('Nexus')).toBe(true);
  });
});

describe('hasEnoughEnergy', () => {
  test('convertit puis compare les valeurs', () => {
    expect(hasEnoughEnergy('750', 500)).toBe(true);
    expect(hasEnoughEnergy('500', '500')).toBe(true);
    expect(hasEnoughEnergy('499', 500)).toBe(false);
  });
});

describe('isCorrectZone', () => {
  test('utilise une comparaison stricte', () => {
    expect(isCorrectZone('FOUNDATIONS', 'FOUNDATIONS')).toBe(true);
    expect(isCorrectZone('FOUNDATIONS', 'ARCHIVES')).toBe(false);
    expect(isCorrectZone(42, '42')).toBe(false);
  });
});
