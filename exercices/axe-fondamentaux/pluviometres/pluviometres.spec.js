import { describe, expect, test } from '@jest/globals';
import {
  readRainfall,
  totalRainfall,
  isScheduledHour,
  isFaultyReading,
  isConfirmedReading,
} from './pluviometres.js';

describe('readRainfall', () => {
  test('convertit un relevé en number', () => {
    expect(readRainfall('12.5')).toBe(12.5);
    expect(readRainfall('0')).toBe(0);
    expect(readRainfall(8)).toBe(8);
  });
});

describe('totalRainfall', () => {
  test('additionne les relevés au lieu de les concaténer', () => {
    expect(totalRainfall('12', '8')).toBe(20);
    expect(totalRainfall(12, '8')).toBe(20);
    expect(totalRainfall(2.5, 4)).toBe(6.5);
  });
});

describe('isScheduledHour', () => {
  test('détecte les heures multiples de 3', () => {
    expect(isScheduledHour(9)).toBe(true);
    expect(isScheduledHour(0)).toBe(true);
    expect(isScheduledHour(10)).toBe(false);
    expect(isScheduledHour(22)).toBe(false);
  });
});

describe('isFaultyReading', () => {
  test('détecte un relevé produisant NaN', () => {
    expect(isFaultyReading('ERR')).toBe(true);
    expect(isFaultyReading('12,5')).toBe(true);
    expect(isFaultyReading('12.5')).toBe(false);
    expect(isFaultyReading(0)).toBe(false);
  });
});

describe('isConfirmedReading', () => {
  test('compare strictement les relevés convertis', () => {
    expect(isConfirmedReading('12', 12)).toBe(true);
    expect(isConfirmedReading('12.0', '12')).toBe(true);
    expect(isConfirmedReading('12', 13)).toBe(false);
  });
});
