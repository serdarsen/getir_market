const config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/test/fileMock.ts",
    "\\.(css|scss)$": "<rootDir>/src/test/styleMock.ts",
  },
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: ["/node_modules/", "/public/", "/build/"],
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTest.ts"],
  snapshotResolver: "<rootDir>/src/test/snapshotResolver.ts",
};

export default config;
