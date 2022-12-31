import { JestConfigWithTsJest } from 'ts-jest'

const configJest: JestConfigWithTsJest = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
};

export default configJest;