global.window = Object.create(window);

Object
  .defineProperty(window, 'amplitude', {
    value: {
      getInstance: () => ({
        init: jest.fn(),
        setUserId: jest.fn(),
        logEvent: jest.fn()
      })
    },
    writable: true
  });
