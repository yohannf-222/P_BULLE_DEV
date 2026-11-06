import { describe, expect, test } from '@jest/globals';
import {
  addArtifact,
  removeLastArtifact,
  replaceArtifact,
  findArtifact,
  normalizeArtifactName,
  isArchiveCode,
} from './inventaire.js';

describe('addArtifact', () => {
  test('ajoute un artefact à la fin', () => {
    expect(addArtifact(['clé'], 'cristal')).toEqual(['clé', 'cristal']);
  });
});

describe('removeLastArtifact', () => {
  test('retire et retourne le dernier artefact', () => {
    const inventory = ['clé', 'cristal'];
    expect(removeLastArtifact(inventory)).toBe('cristal');
    expect(inventory).toEqual(['clé']);
  });
});

describe('replaceArtifact', () => {
  test('remplace un artefact à un index donné', () => {
    expect(replaceArtifact(['clé', 'pierre', 'cristal'], 1, 'orbe'))
      .toEqual(['clé', 'orbe', 'cristal']);
  });
});

describe('findArtifact', () => {
  test('trouve un artefact ou retourne undefined', () => {
    expect(findArtifact(['clé', 'orbe', 'cristal'], 'orbe')).toBe('orbe');
    expect(findArtifact(['clé', 'orbe'], 'épée')).toBeUndefined();
  });
});

describe('normalizeArtifactName', () => {
  test('nettoie le nom', () => {
    expect(normalizeArtifactName('  CRISTAL  ')).toBe('cristal');
    expect(normalizeArtifactName('Orbe')).toBe('orbe');
  });
});

describe('isArchiveCode', () => {
  test('vérifie le préfixe ARC-', () => {
    expect(isArchiveCode('ARC-42')).toBe(true);
    expect(isArchiveCode('NEX-42')).toBe(false);
  });
});
