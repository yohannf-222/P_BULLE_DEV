import { afterEach, describe, expect, jest, test } from '@jest/globals';
import {
  verticalSpeed,
  nextAltitude,
  randomWind,
  landingDuration,
  hasGracefullyLanded,
} from './atterrissage.js';

// Math.random est remplacé pour rendre le vent prévisible.
// Math.random() = 0     → vent de 0 cm/s
// Math.random() = 0.999 → vent de 2.997 cm/s (presque le maximum)
function fixRandom(...values) {
  let calls = 0;
  return jest.spyOn(Math, 'random').mockImplementation(() => values[calls++ % values.length]);
}

afterEach(() => {
  jest.restoreAllMocks();
});

describe('verticalSpeed', () => {
  test('le vent ascensionnel freine la descente', () => {
    expect(verticalSpeed(0)).toBe(-10);
    expect(verticalSpeed(3)).toBe(-7);
    expect(verticalSpeed(1.5)).toBe(-8.5);
  });
});

describe('nextAltitude', () => {
  test('calcule l altitude une seconde plus tard', () => {
    expect(nextAltitude(1000, 0)).toBe(990);
    expect(nextAltitude(500, 2.5)).toBe(492.5);
  });

  test('le drone ne descend jamais sous le sol', () => {
    expect(nextAltitude(5, 0)).toBe(0);
    expect(nextAltitude(7, 3)).toBe(0);
  });
});

describe('randomWind', () => {
  test('retourne toujours un vent entre 0 et 3 cm/s', () => {
    for (let i = 0; i < 1000; i++) {
      const wind = randomWind();
      expect(wind).toBeGreaterThanOrEqual(0);
      expect(wind).toBeLessThan(3);
    }
  });

  test('utilise Math.random', () => {
    fixRandom(0.5);
    expect(randomWind()).toBe(1.5);
  });
});

describe('landingDuration', () => {
  test('sans vent, 10 m prennent 100 secondes', () => {
    fixRandom(0);
    expect(landingDuration(1000)).toBe(100);
  });

  test('avec un vent presque maximal, la descente est plus lente', () => {
    fixRandom(0.999);
    expect(landingDuration(1000)).toBe(143);
  });

  test('le vent est mesuré à chaque seconde', () => {
    fixRandom(0, 0.5);
    expect(landingDuration(1000)).toBe(109);
  });

  test('un drone déjà posé ne bouge pas', () => {
    expect(landingDuration(0)).toBe(0);
  });

  test('avec un vent aléatoire, la durée reste plausible', () => {
    const duration = landingDuration(1000);
    expect(duration).toBeGreaterThanOrEqual(100);
    expect(duration).toBeLessThanOrEqual(143);
  });
});

describe('hasGracefullyLanded', () => {
  test('le drone se pose si la batterie suffit', () => {
    fixRandom(0);
    expect(hasGracefullyLanded(1000, 100)).toBe(true);
  });

  test('le drone reste en l air si la batterie est vide trop tôt', () => {
    fixRandom(0);
    expect(hasGracefullyLanded(1000, 99)).toBe(false);
  });

  test('le vent ascensionnel peut vider la batterie', () => {
    fixRandom(0.999);
    expect(hasGracefullyLanded(1000, 142)).toBe(false);
    expect(hasGracefullyLanded(1000, 143)).toBe(true);
  });

  test('ne consulte plus le vent une fois posé', () => {
    const random = fixRandom(0);
    expect(hasGracefullyLanded(1000, 500)).toBe(true);
    expect(random).toHaveBeenCalledTimes(100);
  });
});
