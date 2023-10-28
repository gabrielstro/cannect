/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}

export default config
