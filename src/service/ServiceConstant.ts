const port = 8080;
const isPro = process.env.npm_lifecycle_event === "build";

export const JSON_API = isPro ? "api" : `http://localhost:${port}/api`;
