export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    "@users/(.*)": ["<rootDir>/src/modules/users/$1"],
    "@shared/(.*)": ["<rootDir>/src/modules/shared/$1"]
  },
  testMatch: ['<rootDir>/src/**/*.test.ts']
}
