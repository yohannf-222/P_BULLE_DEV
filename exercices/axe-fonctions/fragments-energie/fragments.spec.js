import { describe, expect, test } from '@jest/globals'
import {
  sumFragments,
  countFragments,
  averageFragments,
  totalWithBase,
  formulaLabel,
  prepareMixture,
} from './fragments.js'

describe('sumFragments', () => {
  test('additionne un nombre variable de valeurs', () => {
    expect(sumFragments(10, 20)).toBe(30)
    expect(sumFragments(5, 10, 15, 20)).toBe(50)
    expect(sumFragments()).toBe(0)
  })
})

describe('countFragments', () => {
  test('compte les paramètres reçus', () => {
    expect(countFragments(10, 20, 30)).toBe(3)
    expect(countFragments()).toBe(0)
  })
})

describe('averageFragments', () => {
  test('calcule la moyenne', () => {
    expect(averageFragments(10, 20, 30)).toBe(20)
    expect(averageFragments(10, 20)).toBe(15)
  })
})

describe('totalWithBase', () => {
  test('ajoute la base aux fragments', () => {
    expect(totalWithBase(100, 10, 20, 30)).toBe(160)
    expect(totalWithBase(50)).toBe(50)
  })
})

describe('formulaLabel', () => {
  test('construit le libellé', () => {
    expect(formulaLabel('Fusion', 10, 20, 30)).toBe('Fusion : 3 valeurs')
    expect(formulaLabel('Vide')).toBe('Vide : 0 valeurs')
  })
})

describe('prepareMixture', () => {
  test('calcule le total et construit le message', () => {
    expect(prepareMixture('Nova', 10, 20, 5)).toBe('Nova = 35')
  })
})
