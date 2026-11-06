import { describe, expect, test } from '@jest/globals';
import {
  createArtifact,
  artifactLabel,
  upgradeArtifact,
  archiveArtifact,
  toJson,
  fromJson,
} from './artefacts.js';

describe('createArtifact', () => {
  test('crée une fiche', () => {
    expect(createArtifact(1, 'Orbe', 75))
      .toEqual({ id: 1, name: 'Orbe', power: 75 });
  });
});

describe('artifactLabel', () => {
  test('crée le libellé attendu', () => {
    expect(artifactLabel({ id: 1, name: 'Orbe', power: 75 }))
      .toBe('Orbe (75)');
  });
});

describe('upgradeArtifact', () => {
  test('retourne un nouvel objet sans modifier l original', () => {
    const original = { id: 1, name: 'Orbe', power: 75 };
    const upgraded = upgradeArtifact(original, 10);

    expect(upgraded).toEqual({ id: 1, name: 'Orbe', power: 85 });
    expect(original).toEqual({ id: 1, name: 'Orbe', power: 75 });
    expect(upgraded).not.toBe(original);
  });
});

describe('archiveArtifact', () => {
  test('ajoute archived true', () => {
    expect(archiveArtifact({ id: 1, name: 'Orbe', power: 75 }))
      .toEqual({ id: 1, name: 'Orbe', power: 75, archived: true });
  });
});

describe('JSON', () => {
  test('convertit et recrée une fiche', () => {
    const artifact = { id: 2, name: 'Cristal', power: 40 };
    const text = toJson(artifact);

    expect(typeof text).toBe('string');
    expect(fromJson(text)).toEqual(artifact);
  });
});
