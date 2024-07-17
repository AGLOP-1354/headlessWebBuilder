import { WORKER_BASE_PATH, workerInstance } from "@/src/apis/worker/index";
import { ViewMetadata } from "@/src/apis/worker/type";

const getGetViewListPath = () => WORKER_BASE_PATH;

export type ViewKeyData = {
  name: string,
  metadata: ViewMetadata
};

export type ViewListResponseData = {
  keys: ViewKeyData[],
}

export const getViewList = async () => {
  const response = await workerInstance(getGetViewListPath());

  const responseData = {
    keys: response.data.data.keys,
  };

  return responseData as ViewListResponseData;
}
