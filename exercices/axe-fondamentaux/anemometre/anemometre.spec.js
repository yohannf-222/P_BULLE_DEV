import { describe, expect, test } from '@jest/globals';
import {
  kmhToMs,
  gustGap,
  averageOfThree,
  isStormAlert,
  windReport,
} from './anemometre.js';

describe('kmhToMs', () => {
  test('convertit les km/h en m/s', () => {
    expect(kmhToMs(36)).toBe(10);
    expect(kmhToMs(72)).toBe(20);
    expect(kmhToMs(0)).toBe(0);
  });
});

describe('gustGap', () => {
  test('calcule l écart entre la rafale et le vent moyen', () => {
    expect(gustGap(85, 60)).toBe(25);
    expect(gustGap(40, 40)).toBe(0);
  });
});

describe('averageOfThree', () => {
  test('calcule la moyenne de trois mesures', () => {
    expect(averageOfThree(20, 30, 40)).toBe(30);
    expect(averageOfThree(12, 15, 18)).toBe(15);
    expect(averageOfThree(0, 0, 9)).toBe(3);
  });
});

describe('isStormAlert', () => {
  test('retourne true à partir de 75 km/h', () => {
    expect(isStormAlert(75)).toBe(true);
    expect(isStormAlert(80)).toBe(true);
    expect(isStormAlert(74)).toBe(false);
  });
});

describe('windReport', () => {
  test('construit le bulletin demandé', () => {
    expect(windReport('Falaise Nord', 36))
      .toBe('Falaise Nord : vent de 36 km/h (10 m/s).');
    expect(windReport('Phare Est', 90))
      .toBe('Phare Est : vent de 90 km/h (25 m/s).');
  });
});
