import { describe, expect, test } from '@jest/globals';
import {
  convertCode,
  sameCodeLoose,
  sameCodeStrict,
  isEvenCode,
  isInvalidCode,
} from './codes-acces.js';

describe('convertCode', () => {
  test('convertit une chaîne numérique en number', () => {
    expect(convertCode('42')).toBe(42);
    expect(convertCode('7')).toBe(7);
    expect(convertCode(12)).toBe(12);
  });
});

describe('sameCodeLoose', () => {
  test('utilise le comportement de l égalité souple', () => {
    expect(sameCodeLoose('42', 42)).toBe(true);
    expect(sameCodeLoose('7', 7)).toBe(true);
    expect(sameCodeLoose(8, 9)).toBe(false);
  });
});

describe('sameCodeStrict', () => {
  test('utilise le comportement de l égalité stricte', () => {
    expect(sameCodeStrict('42', 42)).toBe(false);
    expect(sameCodeStrict(42, 42)).toBe(true);
    expect(sameCodeStrict('42', '42')).toBe(true);
  });
});

describe('isEvenCode', () => {
  test('détermine si un code est pair', () => {
    expect(isEvenCode(42)).toBe(true);
    expect(isEvenCode(17)).toBe(false);
    expect(isEvenCode(0)).toBe(true);
  });
});

describe('isInvalidCode', () => {
  test('détecte une conversion produisant NaN', () => {
    expect(isInvalidCode('NEXUS')).toBe(true);
    expect(isInvalidCode('42')).toBe(false);
    expect(isInvalidCode(42)).toBe(false);
  });
});
