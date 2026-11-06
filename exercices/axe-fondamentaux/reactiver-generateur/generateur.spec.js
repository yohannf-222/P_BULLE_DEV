import { describe, expect, test } from '@jest/globals';
import {
  missingEnergy,
  energyPercentage,
  energyAfterRecharge,
  isGeneratorReady,
  generatorStatus,
} from './generateur.js';

describe('missingEnergy', () => {
  test('calcule l énergie manquante', () => {
    expect(missingEnergy(1000, 650)).toBe(350);
    expect(missingEnergy(500, 500)).toBe(0);
    expect(missingEnergy(1200, 200)).toBe(1000);
  });
});

describe('energyPercentage', () => {
  test('calcule le pourcentage disponible', () => {
    expect(energyPercentage(1000, 650)).toBe(65);
    expect(energyPercentage(800, 400)).toBe(50);
    expect(energyPercentage(500, 500)).toBe(100);
  });
});

describe('energyAfterRecharge', () => {
  test('ajoute la recharge à l énergie actuelle', () => {
    expect(energyAfterRecharge(650, 100)).toBe(750);
    expect(energyAfterRecharge(0, 250)).toBe(250);
  });
});

describe('isGeneratorReady', () => {
  test('retourne true à partir de 500 unités', () => {
    expect(isGeneratorReady(500)).toBe(true);
    expect(isGeneratorReady(650)).toBe(true);
    expect(isGeneratorReady(499)).toBe(false);
  });
});

describe('generatorStatus', () => {
  test('construit le message demandé', () => {
    expect(generatorStatus('NZ-01', 650))
      .toBe("NZ-01 possède 650 unités d'énergie.");
    expect(generatorStatus('CORE-X', 100))
      .toBe("CORE-X possède 100 unités d'énergie.");
  });
});
