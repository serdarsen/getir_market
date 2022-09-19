const config = {
  resolveSnapshotPath: (
    testPath: string,
    snapshotExtension: string,
  ) => testPath
    .replace(
      /\.test\.([tj]sx?)/,
      `.test${snapshotExtension}`,
    ),

  resolveTestPath: (
    snapshotFilePath: string,
    snapshotExtension: string,
  ) => snapshotFilePath
    .replace(snapshotExtension, ".tsx")
    .replace("__snapshots__", "src/component"),

  testPathForConsistencyCheck: "src/component/some.test.tsx",
};

export default config;
