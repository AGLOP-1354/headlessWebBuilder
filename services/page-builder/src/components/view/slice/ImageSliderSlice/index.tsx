import React from "react";
import { Box } from "@headless-web-builder/react-components-layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { convertSpacingRemToPx } from "@/src/utils/size";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSliceSchema } from "@/src/utils/validation/schema/slices";

type Props = SliceSchemaProps<typeof ImageSliceSchema>

export const ImageSliderSlice: React.FC<Props> = ({ images, sliceStyle }: Props) => {
  const {
    backgroundColor = 'transparent',
    imageItemWidth = 280,
    spaceBetween = 16,
    paddingX = 8,
  } = sliceStyle ?? {};

  const offset = convertSpacingRemToPx(paddingX);

  return (
    <Box
      style={{
        backgroundColor,
      }}
    >
      <Swiper
        slidesPerView="auto"
        slidesOffsetBefore={offset}
        spaceBetween={spaceBetween}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map(({ imageUrl, alt }, index) => (
          <SwiperSlide key={`${imageUrl}-${index}`} style={{ width: imageItemWidth }}>
            <img src={imageUrl} alt={alt} style={{ width: imageItemWidth }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
};
