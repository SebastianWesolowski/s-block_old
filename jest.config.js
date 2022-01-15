module.exports = {
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  moduleNameMapper: {
    "^.+\\.(css|less|sass|scss)$": "babel-jest",
    "^components$": "<rootDir>/__mocks__/componentsMock.ts",
    "^atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^organisms/(.*)$": "<rootDir>/src/components/organisms/$1",
    "^templates/(.*)$": "<rootDir>/src/components/templates/$1",
    "^pages/(.*)$": "<rootDir>/src/components/pages/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  verbose: true,
  moduleDirectories: ["node_modules", "src", "src/components/atoms"],
};
