import { describe, expect, jest, test } from '@jest/globals';
import {
  loadFragment,
  fragmentStatus,
  safeLoad,
  loadSequence,
  openPortal,
} from './faille.js';

describe('async / await', () => {
  test('loadFragment attend et retourne la valeur', async () => {
    const loader = () => Promise.resolve('Fragment A');
    await expect(loadFragment(loader)).resolves.toBe('Fragment A');
  });

  test('fragmentStatus construit le message', async () => {
    const loader = () => Promise.resolve('Cristal');
    await expect(fragmentStatus(loader))
      .resolves.toBe('Fragment reçu : Cristal');
  });

  test('safeLoad retourne la valeur ou un message de secours', async () => {
    await expect(safeLoad(() => Promise.resolve('OK'))).resolves.toBe('OK');
    await expect(safeLoad(() => Promise.reject(new Error('Fail'))))
      .resolves.toBe('Fragment indisponible');
  });

  test('loadSequence charge les deux valeurs dans l ordre', async () => {
    const calls = [];

    const firstLoader = async () => {
      calls.push('first');
      return 'A';
    };

    const secondLoader = async () => {
      calls.push('second');
      return 'B';
    };

    await expect(loadSequence(firstLoader, secondLoader))
      .resolves.toEqual(['A', 'B']);

    expect(calls).toEqual(['first', 'second']);
  });

  test('openPortal gère les trois situations', async () => {
    await expect(openPortal(() => Promise.resolve(true)))
      .resolves.toBe('Portail ouvert');

    await expect(openPortal(() => Promise.resolve(false)))
      .resolves.toBe('Portail fermé');

    await expect(openPortal(() => Promise.reject(new Error('Fail'))))
      .resolves.toBe('Erreur temporelle');
  });
});
