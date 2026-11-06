import { describe, expect, test } from '@jest/globals';
import {
  isKnownUniversity,
  titleLevel,
  requiresMaster,
  isTrusted,
  welcomeMessage,
  allTrusted,
} from './visiteurs.js';

describe('isKnownUniversity', () => {
  test('reconnaît les universités de la liste', () => {
    expect(isKnownUniversity('Académie Babbage')).toBe(true);
    expect(isKnownUniversity('Collège Von Neumann')).toBe(true);
  });

  test('refuse les universités absentes de la liste', () => {
    expect(isKnownUniversity('Université Fantôme')).toBe(false);
    expect(isKnownUniversity('')).toBe(false);
  });
});

describe('titleLevel', () => {
  test('convertit un titre en niveau', () => {
    expect(titleLevel('Bachelor')).toBe(1);
    expect(titleLevel('Master')).toBe(2);
  });

  test('retourne 0 pour un titre inconnu', () => {
    expect(titleLevel('Doctorat')).toBe(0);
    expect(titleLevel('master')).toBe(0);
  });
});

describe('requiresMaster', () => {
  test('identifie les universités exigeant un Master', () => {
    expect(requiresMaster('Institut Lovelace')).toBe(true);
    expect(requiresMaster('École Dijkstra')).toBe(true);
  });

  test('les autres universités n exigent pas de Master', () => {
    expect(requiresMaster('Académie Babbage')).toBe(false);
    expect(requiresMaster('Université Fantôme')).toBe(false);
  });
});

describe('isTrusted', () => {
  test('accepte un Bachelor d une université sans exigence', () => {
    expect(isTrusted('Académie Babbage', 'Bachelor')).toBe(true);
    expect(isTrusted('Université Hopper', 'Master')).toBe(true);
  });

  test('exige un Master pour certaines universités', () => {
    expect(isTrusted('Institut Lovelace', 'Bachelor')).toBe(false);
    expect(isTrusted('Institut Lovelace', 'Master')).toBe(true);
  });

  test('refuse une université inconnue ou un titre inconnu', () => {
    expect(isTrusted('Université Fantôme', 'Master')).toBe(false);
    expect(isTrusted('Académie Babbage', 'Doctorat')).toBe(false);
  });
});

describe('welcomeMessage', () => {
  test('explique la décision du Warden', () => {
    expect(welcomeMessage('Université Fantôme', 'Master')).toBe('Université inconnue');
    expect(welcomeMessage('Académie Babbage', 'Diplôme')).toBe('Titre inconnu');
    expect(welcomeMessage('École Dijkstra', 'Bachelor')).toBe('Master requis');
    expect(welcomeMessage('École Dijkstra', 'Master')).toBe('Bienvenue dans la Citadelle');
    expect(welcomeMessage('Université Hopper', 'Bachelor')).toBe('Bienvenue dans la Citadelle');
  });

  test('vérifie l université avant le titre', () => {
    expect(welcomeMessage('Université Fantôme', 'Diplôme')).toBe('Université inconnue');
  });
});

describe('allTrusted', () => {
  test('accepte le groupe si tous les visiteurs sont dignes de confiance', () => {
    expect(
      allTrusted(
        ['Académie Babbage', 'Institut Lovelace', 'Collège Von Neumann'],
        ['Bachelor', 'Master', 'Master'],
      ),
    ).toBe(true);
  });

  test('refuse le groupe dès qu un visiteur ne convient pas', () => {
    expect(
      allTrusted(
        ['Académie Babbage', 'Institut Lovelace', 'Collège Von Neumann'],
        ['Bachelor', 'Bachelor', 'Master'],
      ),
    ).toBe(false);
  });

  test('un groupe vide est accepté', () => {
    expect(allTrusted([], [])).toBe(true);
  });
});
