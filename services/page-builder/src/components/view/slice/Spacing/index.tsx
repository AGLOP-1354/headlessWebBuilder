import React from "react";
import { Box } from "@headless-web-builder/react-components-layout";
import { vars } from '@headless-web-builder/themes'
import { SchemaProps } from "@/src/utils/validation/schema/types";
import { SpacingSliceSchema } from "@/src/utils/validation/schema/slices";

type Props = SchemaProps<typeof SpacingSliceSchema>

export const SpacingSlice: React.FC<Props> = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return (
    <Box
      style={{ width: '100%', height, backgroundColor }}
    />
  )
};
