module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    'node_modules/',
    '.next/',
    '__mocks__/'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    'src/pages/_app.jsx',
    'src/pages/_document.jsx',
    'src/api/',
    'src/apollo/',
    'src/conf/',
    'src/store/',
    'src/styles/',
    '.*style.js'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup.js'
  ],
  coverageReporters: ['lcov', 'text'],
  clearMocks: true,
  bail: 1,
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70
    }
  }
};
