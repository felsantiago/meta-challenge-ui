import Chance from 'chance';

import cleanName from './input';

describe('Testing input utils', () => {
  const chance = new Chance();

  describe('Clean name util', () => {
    test('Should remove symbols correctly', () => {
      const symbols = chance.string({ symbols: true });
      const expectedResult = '';
      const result = cleanName(symbols);

      expect(result).toStrictEqual(expectedResult);
    });

    test('Should remove numbers correctly', () => {
      const numbers = chance.string({ numeric: true });
      const expectedResult = '';
      const result = cleanName(numbers);

      expect(result).toStrictEqual(expectedResult);
    });

    test('Should remove non-word characters and keep word characters', () => {
      const symbols = chance.string({ symbols: true });
      const numbers = chance.string({ numeric: true });
      const sentence = `${chance.word()} ${symbols} ${chance.word()} ${numbers} ${chance.word()}`;
      const expectedResult = sentence.replace(symbols, '').replace(numbers, '');
      const result = cleanName(sentence);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
