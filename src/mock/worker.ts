import { setupWorker } from "msw";
import { controller } from "./controller";

export const worker = setupWorker(...controller);
