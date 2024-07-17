import React from 'react';
import { vars } from '@headless-web-builder/themes'
import { ImageSliderSlice } from "../ImageSliderSlice";
import { TextSlice } from "@/src/components/view/slice/Text";
import { SchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSliderSliceSchema } from "@/src/utils/validation/schema/slices";

type Props = SchemaProps<typeof ImageSliderSliceSchema>

export const ImageSliderSectionSlice: React.FC<Props> = ({ text, images, sliceStyle }: Props) => {
  const {
    paddingX = 8,
    backgroundColor = vars.colors.$static.light.color.white,
    textColor = vars.colors.$static.light.color.black,
    imageItemWidth = 280,
  } = sliceStyle ?? {};

  return (
    <>
      <TextSlice
        text={text}
        sliceStyle={{
          textSize: 20,
          backgroundColor,
          textColor,
          paddingX,
          textAlign: 'left',
        }}
      />
      <ImageSliderSlice
        images={images}
        sliceStyle={{
          backgroundColor,
          imageItemWidth,
          paddingX,
        }}
      />
    </>
  );
};
