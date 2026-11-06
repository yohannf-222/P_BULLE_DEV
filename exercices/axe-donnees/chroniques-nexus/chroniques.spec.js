import { describe, expect, test } from '@jest/globals';
import {
  Discovery,
  daysBetween,
  findDiscovery,
  discoverySummary,
} from './chroniques.js';

describe('Discovery', () => {
  test('stocke les données reçues', () => {
    const date = new Date('2026-10-01');
    const discovery = new Discovery('Faille temporelle', date, 5);

    expect(discovery.name).toBe('Faille temporelle');
    expect(discovery.date).toBe(date);
    expect(discovery.importance).toBe(5);
  });

  test('isImportant dépend de importance', () => {
    expect(new Discovery('A', new Date('2026-01-01'), 4).isImportant()).toBe(true);
    expect(new Discovery('B', new Date('2026-01-01'), 3).isImportant()).toBe(false);
  });

  test('year retourne l année', () => {
    expect(new Discovery('A', new Date('2024-05-06'), 2).year()).toBe(2024);
  });
});

describe('daysBetween', () => {
  test('calcule le nombre de jours', () => {
    expect(daysBetween(new Date('2026-10-01'), new Date('2026-10-02'))).toBe(1);
    expect(daysBetween(new Date('2026-10-01'), new Date('2026-10-06'))).toBe(5);
  });
});

describe('findDiscovery', () => {
  test('recherche une découverte par nom', () => {
    const list = [
      new Discovery('Orbe', new Date('2026-01-01'), 3),
      new Discovery('Faille', new Date('2026-02-01'), 5),
    ];

    expect(findDiscovery(list, 'Faille')).toBe(list[1]);
    expect(findDiscovery(list, 'Inconnue')).toBeUndefined();
  });
});

describe('discoverySummary', () => {
  test('construit un résumé', () => {
    const discovery = new Discovery('Orbe ancien', new Date('2025-04-10'), 3);
    expect(discoverySummary(discovery)).toBe('Orbe ancien - 2025');
  });
});
