import React from "react";
import { Box } from "@headless-web-builder/react-components-layout";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSchema } from "@/src/utils/validation/schema/object";

type Props = SliceSchemaProps<typeof ImageSchema>

export const ImageSlice: React.FC<Props> = ({ imageUrl, alt, sliceStyle }: Props) => {
  const {
    width = '100%',
    padding = 0,
    paddingX = 0,
    paddingY = 0,
    backgroundColor = 'transparent',
  } = sliceStyle ?? {};

  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        width: '100%',
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img src={imageUrl} alt={alt} style={{ width }} />
    </Box>
  )
}
