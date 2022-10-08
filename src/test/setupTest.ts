import "@testing-library/jest-dom";
import {
  fetch, Headers, Request, Response,
} from "cross-fetch";
import { server } from "../mock/server";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
