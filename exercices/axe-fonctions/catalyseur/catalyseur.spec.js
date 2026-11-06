import { describe, expect, test } from '@jest/globals'
import {
  doubleCharge,
  forgePower,
  stabilizeEnergy,
  forgeMessage,
  calculateOutput,
  boostedOutput,
} from './catalyseur.js'

describe('doubleCharge', () => {
  test('double la charge', () => {
    expect(doubleCharge(12)).toBe(24)
    expect(doubleCharge(0)).toBe(0)
  })
})

describe('forgePower', () => {
  test('multiplie les deux paramètres', () => {
    expect(forgePower(10, 3)).toBe(30)
    expect(forgePower(4, 5)).toBe(20)
  })
})

describe('stabilizeEnergy', () => {
  test('utilise 2 comme facteur par défaut', () => {
    expect(stabilizeEnergy(10)).toBe(20)
  })

  test('accepte un facteur fourni', () => {
    expect(stabilizeEnergy(10, 3)).toBe(30)
  })
})

describe('forgeMessage', () => {
  test('utilise le préfixe Forge par défaut', () => {
    expect(forgeMessage('Cristal')).toBe('Forge : Cristal')
  })

  test('accepte un autre préfixe', () => {
    expect(forgeMessage('Cristal', 'Lambda')).toBe('Lambda : Cristal')
  })
})

describe('calculateOutput', () => {
  test('calcule l énergie restante', () => {
    expect(calculateOutput(100, 25)).toBe(75)
  })
})

describe('boostedOutput', () => {
  test('réutilise les calculs avec le facteur par défaut', () => {
    expect(boostedOutput(100, 25)).toBe(150)
  })

  test('accepte un facteur différent', () => {
    expect(boostedOutput(100, 25, 3)).toBe(225)
  })
})
