const config = {
  resolveSnapshotPath: (
    testPath: string,
    snapshotExtension: string,
  ) => testPath
    .replace(
      /\.test\.([tj]sx?)/,
      `.test${snapshotExtension}`,
    )
    .replace(
      /src([/\\]components)/,
      "__snapshots__",
    ),

  resolveTestPath: (
    snapshotFilePath: string,
    snapshotExtension: string,
  ) => snapshotFilePath
    .replace(snapshotExtension, ".tsx")
    .replace("__snapshots__", "src/components"),

  testPathForConsistencyCheck: "src/component/some.test.tsx",
};

export default config;
