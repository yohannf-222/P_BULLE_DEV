import { describe, expect, jest, test } from '@jest/globals';
import {
  createSignal,
  delayValue,
  checkTemporalCode,
  prepareMessage,
  safeTemporalCode,
} from './promesses.js';

describe('promesses', () => {
  test('createSignal retourne une promesse résolue', async () => {
    await expect(createSignal('NEXUS')).resolves.toBe('NEXUS');
  });

  test('delayValue résout la valeur après le délai', async () => {
    jest.useFakeTimers();

    const promise = delayValue(42, 500);
    jest.advanceTimersByTime(500);

    await expect(promise).resolves.toBe(42);
    jest.useRealTimers();
  });

  test('checkTemporalCode accepte NYX', async () => {
    await expect(checkTemporalCode('NYX')).resolves.toBe('Code accepté');
  });

  test('checkTemporalCode rejette les autres codes', async () => {
    await expect(checkTemporalCode('ADA')).rejects.toThrow('Code refusé');
  });

  test('prepareMessage transforme la valeur avec then', async () => {
    await expect(prepareMessage('NEXUS')).resolves.toBe('Signal : NEXUS');
  });

  test('safeTemporalCode gère le rejet', async () => {
    await expect(safeTemporalCode('NYX')).resolves.toBe('Code accepté');
    await expect(safeTemporalCode('ADA')).resolves.toBe('Code refusé');
  });
});
