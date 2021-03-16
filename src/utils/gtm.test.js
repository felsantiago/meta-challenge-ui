import Chance from 'chance';
import gtm from './gtm';

const chance = new Chance();
const mockUrl = chance.url();

const mockPush = jest.fn();

Object
  .defineProperty(window, 'dataLayer', {
    value: {
      push: mockPush
    },
    writable: true
  });

describe('Testing eventNames const', () => {
    test('Should window.dataLayer.push to be called', () => {
      gtm(mockUrl);
      expect(mockPush).toHaveBeenCalled();
    });
});
