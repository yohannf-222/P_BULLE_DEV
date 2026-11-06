import { describe, expect, test } from '@jest/globals';
import {
  validateEnergy,
  safeEnergyCheck,
  validateGateCode,
  safeGateCheck,
  countValidAttempts,
  attemptsBeforeLock,
} from './securite.js';

describe('validateEnergy', () => {
  test('retourne une énergie valide', () => {
    expect(validateEnergy(0)).toBe(0);
    expect(validateEnergy(50)).toBe(50);
  });

  test('lance une erreur pour une énergie négative', () => {
    expect(() => validateEnergy(-1)).toThrow('Énergie invalide');
  });
});

describe('safeEnergyCheck', () => {
  test('intercepte les erreurs', () => {
    expect(safeEnergyCheck(20)).toBe('Énergie valide');
    expect(safeEnergyCheck(-5)).toBe('Énergie invalide');
  });
});

describe('validateGateCode', () => {
  test('accepte les codes connus', () => {
    expect(validateGateCode('ALPHA')).toBe('ALPHA');
    expect(validateGateCode('BETA')).toBe('BETA');
    expect(validateGateCode('OMEGA')).toBe('OMEGA');
  });

  test('refuse un code inconnu', () => {
    expect(() => validateGateCode('DELTA')).toThrow('Code inconnu');
  });
});

describe('safeGateCheck', () => {
  test('retourne un message sans laisser sortir l erreur', () => {
    expect(safeGateCheck('ALPHA')).toBe('Code accepté');
    expect(safeGateCheck('DELTA')).toBe('Code refusé');
  });
});

describe('countValidAttempts', () => {
  test('compte les caractères A et B', () => {
    expect(countValidAttempts('ABXABA')).toBe(5);
    expect(countValidAttempts('XXX')).toBe(0);
    expect(countValidAttempts('AB')).toBe(2);
  });
});

describe('attemptsBeforeLock', () => {
  test('s arrête à la troisième erreur', () => {
    expect(attemptsBeforeLock('VXVXXV')).toBe(5);
    expect(attemptsBeforeLock('XXXVV')).toBe(3);
    expect(attemptsBeforeLock('VVVV')).toBe(4);
  });
});
