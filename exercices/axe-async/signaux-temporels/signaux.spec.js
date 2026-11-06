import { describe, expect, jest, test } from '@jest/globals';
import {
  runLater,
  sendSignal,
  doubleLater,
  delayedStatus,
} from './signaux.js';

describe('signaux temporels', () => {
  test('runLater exécute le callback après le délai', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    runLater(callback, 1000);

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  test('sendSignal transmet le message', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    sendSignal('NEXUS', 500, callback);
    jest.advanceTimersByTime(500);

    expect(callback).toHaveBeenCalledWith('NEXUS');
    jest.useRealTimers();
  });

  test('doubleLater transmet le double de la valeur', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    doubleLater(5, 250, callback);
    jest.advanceTimersByTime(250);

    expect(callback).toHaveBeenCalledWith(10);
    jest.useRealTimers();
  });

  test('delayedStatus construit le message attendu', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    delayedStatus('Portail', 200, callback);
    jest.advanceTimersByTime(200);

    expect(callback).toHaveBeenCalledWith('Portail prêt');
    jest.useRealTimers();
  });
});
