import { describe, expect, test } from '@jest/globals';
import {
  dataType,
  isNotTransmitted,
  isOffline,
  hasBirdCount,
  totalBirds,
  isValidWaveHeight,
} from './observatoire.js';

describe('dataType', () => {
  test('retourne le type JavaScript', () => {
    expect(dataType(128)).toBe('number');
    expect(dataType('2.4')).toBe('string');
    expect(dataType(undefined)).toBe('undefined');
    expect(dataType(NaN)).toBe('number');
  });
});

describe('isNotTransmitted', () => {
  test('distingue undefined des autres valeurs', () => {
    expect(isNotTransmitted(undefined)).toBe(true);
    expect(isNotTransmitted(null)).toBe(false);
    expect(isNotTransmitted(0)).toBe(false);
  });
});

describe('isOffline', () => {
  test('distingue null des autres valeurs', () => {
    expect(isOffline(null)).toBe(true);
    expect(isOffline(undefined)).toBe(false);
    expect(isOffline(0)).toBe(false);
  });
});

describe('hasBirdCount', () => {
  test('retourne false uniquement pour null et undefined', () => {
    expect(hasBirdCount(null)).toBe(false);
    expect(hasBirdCount(undefined)).toBe(false);
    expect(hasBirdCount(0)).toBe(true);
    expect(hasBirdCount(128)).toBe(true);
  });
});

describe('totalBirds', () => {
  test('additionne les comptages disponibles', () => {
    expect(totalBirds(120, 45)).toBe(165);
    expect(totalBirds(120, null)).toBe(120);
    expect(totalBirds(undefined, 30)).toBe(30);
    expect(totalBirds(0, 15)).toBe(15);
    expect(totalBirds(null, undefined)).toBe(0);
  });
});

describe('isValidWaveHeight', () => {
  test('accepte uniquement un nombre qui n est pas NaN', () => {
    expect(isValidWaveHeight(2.4)).toBe(true);
    expect(isValidWaveHeight(0)).toBe(true);
    expect(isValidWaveHeight('2.4')).toBe(false);
    expect(isValidWaveHeight(NaN)).toBe(false);
    expect(isValidWaveHeight(null)).toBe(false);
    expect(isValidWaveHeight(undefined)).toBe(false);
  });
});
