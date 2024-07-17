import React, { useMemo } from "react";
import { MetadataSliceProps } from "@/src/components/view/slice/Metadata";

import { MetadataSlice } from "@/src/components/view/slice/Metadata";
import { AccordionSlice } from "@/src/components/view/slice/Accordion";
import { ImageSlice } from "@/src/components/view/slice/Image";
import { ImageSliderSectionSlice } from "@/src/components/view/slice/ImageSliderSection";
import { SpacingSlice } from "@/src/components/view/slice/Spacing";
import { TextSlice } from "@/src/components/view/slice/Text";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";

export const useViewSchemaSlice = (viewSchema: ViewSchemaProps) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (viewSchema.metadata) {
      sliceList.push(<MetadataSlice {...viewSchema.metadata} />);
    };

    viewSchema.slices.forEach(({ sliceName, data }) => {
      switch (sliceName) {
        case "TextSlice": {
          sliceList.push(<TextSlice {...data} />);
          break;
        }
        case "ImageSlice": {
          sliceList.push(<ImageSlice {...data} />);
          break;
        }
        case "SpacingSlice": {
          sliceList.push(<SpacingSlice {...data} />);
          break;
        }
        case "ImageSliderSectionSlice": {
          sliceList.push(<ImageSliderSectionSlice {...data} />);
          break;
        }

        case "AccordionSlice": {
          sliceList.push(<AccordionSlice {...data} />);
          break;
        }
      }
    });

    return sliceList;
  }, [viewSchema]);

  return slices;
}
