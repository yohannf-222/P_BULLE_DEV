import { describe, expect, test } from '@jest/globals';
import {
  sumRounds,
  countSymbols,
  countX,
  turnsBeforeEmpty,
  firstRoundAbove,
} from './patrouilles.js';

describe('sumRounds', () => {
  test('additionne les numéros de ronde', () => {
    expect(sumRounds(1)).toBe(1);
    expect(sumRounds(4)).toBe(10);
    expect(sumRounds(10)).toBe(55);
  });
});

describe('countSymbols', () => {
  test('compte les caractères', () => {
    expect(countSymbols('NEXUS')).toBe(5);
    expect(countSymbols('ABC')).toBe(3);
    expect(countSymbols('')).toBe(0);
  });
});

describe('countX', () => {
  test('compte uniquement les X majuscules', () => {
    expect(countX('X-NEXUS-X')).toBe(3);
    expect(countX('ABC')).toBe(0);
    expect(countX('XXX')).toBe(3);
  });
});

describe('turnsBeforeEmpty', () => {
  test('calcule le nombre de tours complets possibles', () => {
    expect(turnsBeforeEmpty(100, 30)).toBe(3);
    expect(turnsBeforeEmpty(90, 30)).toBe(3);
    expect(turnsBeforeEmpty(20, 30)).toBe(0);
  });
});

describe('firstRoundAbove', () => {
  test('retourne la première ronde dépassant la limite', () => {
    expect(firstRoundAbove(0)).toBe(1);
    expect(firstRoundAbove(1)).toBe(2);
    expect(firstRoundAbove(6)).toBe(4);
    expect(firstRoundAbove(10)).toBe(5);
  });
});
