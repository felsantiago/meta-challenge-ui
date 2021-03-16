import isMobile from './detectDevice';

describe('Testing detectDevice utils', () => {
  test('Testing isMobile false', () => {
    expect(isMobile()).toBeFalsy();
  });
});
