module.exports = {
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  moduleNameMapper: {
    "^.+\\.(css|less|sass|scss)$": "babel-jest",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "^components$": "<rootDir>/__mocks__/componentsMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  verbose: true,
  moduleDirectories: ["node_modules"],
};
