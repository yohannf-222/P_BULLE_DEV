import { describe, expect, test } from '@jest/globals'
import { calculateEnergy, multiplyEnergy } from './energie.js'
import { formatResult } from './messages.js'
import { createSynthesis, createBoostedSynthesis } from './atelier.js'

describe('module energie', () => {
  test('calculateEnergy utilise le bonus par défaut', () => {
    expect(calculateEnergy(100)).toBe(100)
    expect(calculateEnergy(100, 25)).toBe(125)
  })

  test('multiplyEnergy utilise le facteur par défaut', () => {
    expect(multiplyEnergy(40)).toBe(80)
    expect(multiplyEnergy(40, 3)).toBe(120)
  })
})

describe('module messages', () => {
  test('formatResult construit le message', () => {
    expect(formatResult('Fusion', 125)).toBe('Fusion : 125')
  })
})

describe('module atelier', () => {
  test('createSynthesis réutilise les modules', () => {
    expect(createSynthesis('Fusion', 100, 25)).toBe('Fusion : 125')
    expect(createSynthesis('Stable', 80)).toBe('Stable : 80')
  })

  test('createBoostedSynthesis réutilise les modules', () => {
    expect(createBoostedSynthesis('Pulse', 40)).toBe('Pulse : 80')
    expect(createBoostedSynthesis('Pulse', 40, 3)).toBe('Pulse : 120')
  })
})
