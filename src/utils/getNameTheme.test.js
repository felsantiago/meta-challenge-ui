import getNameTheme from './getNameTheme';

describe('Testing getNameTheme utils', () => {
  describe('Testing valid scenario', () => {
    test.each([
      ['meta', 'meta']
    ])('Testing getNameTheme with valid theme %s toBe %s', (themeName, expected) => {
      expect(getNameTheme(themeName)).toBe(expected);
    });

    test.each([
      ['meta']
    ])('Testing getNameTheme with valid theme %s NOT toBe %s', (themeName, expected) => {
      expect(getNameTheme(themeName)).not.toBe(expected);
    });
  });

  describe('Testing invalid scenario', () => {
    test.each([
      ['notvalidtheme'],
      ['xablau'],
      ['notmapped'],
      ['notexists']
    ])('Testing getNameTheme with invalid theme %s toBe UNDEFINED', (themeName) => {
      expect(getNameTheme(themeName)).toBeUndefined();
    });
  });
});
