import Chance from 'chance';
import {
  clearSession,
  getSessionObjectValue,
  setSessionObjectValue,
  getSessionValue,
  setSessionValue
} from './storage';

describe('Testing storage utils', () => {
  const chance = new Chance();
  const sentence = chance.sentence();
  const mockObject = {
    x: chance.hash(),
    y: chance.sentence()
  };

  describe('Testing session storage', () => {
    test('Should have expected sentence value', () => {
      setSessionValue('testSentence', sentence);
      const expected = getSessionValue('testSentence');
      expect(expected).toBe(sentence);
    });

    test('Should not be null expected value', () => {
      setSessionValue('testSentence', sentence);
      const expected = getSessionValue('testSentence');
      expect(expected).not.toBeNull();
    });

    test('Should to be empty string "null" when value is null', () => {
      setSessionValue('testSentence', null);
      const expected = getSessionValue('testSentence');
      expect(expected).toBe('null');
    });

    test('Should to be empty string "undefined" when value is not set', () => {
      setSessionValue('testSentence');
      const expected = getSessionValue('testSentence');
      expect(expected).toBe('undefined');
    });

    test('Should not have expected sentence value when clear session', () => {
      setSessionValue('testSentence', sentence);
      clearSession();
      const expected = getSessionValue('testSentence');
      expect(expected).not.toBe(sentence);
    });

    test('Should not persist when setSessionObject is called with a non object value', () => {
      setSessionObjectValue('object', sentence);
      const expected = global.window.sessionStorage.getItem('object');
      expect(expected).toBe(null);
    });

    test('Should persist when setSessionObject is called with object value', () => {
      setSessionObjectValue('object', mockObject);
      const persistedObject = global.window.sessionStorage.getItem('object');
      const expectedObject = JSON.stringify(mockObject);
      expect(persistedObject).toBe(expectedObject);
    });

    test('Should return null when getSessionObject is called without setting an object', () => {
      const persistedObject = getSessionObjectValue(sentence);
      expect(persistedObject).toBe(null);
    });

    test('Should return object when getSessionObject is called and a string with object shape is persisted', () => {
      const stringifiedObject = JSON.stringify(mockObject);
      window.sessionStorage.setItem('object', stringifiedObject);

      const received = getSessionObjectValue('object');
      expect(typeof received).toBe('object');
      expect(received).toStrictEqual(mockObject);
    });

    test('Should not have expected sentence value when window not exists', () => {
      delete global.window;
      setSessionValue('testSentence', sentence);
      clearSession();
      const expected = getSessionValue('testSentence');
      expect(expected).not.toBe(sentence);
    });
  });
});
