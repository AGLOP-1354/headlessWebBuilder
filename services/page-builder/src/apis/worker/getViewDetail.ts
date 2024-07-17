import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";

const getGetViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
};

type ViewDetailResponseDetail = {
  value: ViewSchemaProps;
  metadata: Object;
}

export const getViewDetail = async ({ viewId }: Params) => {
  const response = await workerInstance.get(getGetViewDetailPath(viewId));

  const responseData = {
    value: JSON.parse(response.data.data.value),
    metadata: response.data.data.metadata,
  }

  return responseData as ViewDetailResponseDetail;
};
