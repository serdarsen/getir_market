import { setupServer } from "msw/node";
import { controller } from "./controller";

export const server = setupServer(...controller);
