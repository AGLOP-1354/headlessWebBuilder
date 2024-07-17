import { initFetchInstance } from "../instance";

export const WORKER_BASE_PATH = "/api/views";
export const WORKER_BASE_URL =
  "https://headless-web-builder.ujh9208.workers.dev";

export const workerInstance = initFetchInstance({
  baseURL: WORKER_BASE_URL,
});
