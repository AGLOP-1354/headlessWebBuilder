import React from "react";
import { Text } from "@headless-web-builder/react-components-layout";
import { vars } from '@headless-web-builder/themes'
import { SchemaProps } from "@/src/utils/validation/schema/types";
import { TextSliceSchema } from "@/src/utils/validation/schema/slices";

type Props = SchemaProps<typeof TextSliceSchema>

export const TextSlice: React.FC<Props> = ({ text, highlightTexts, sliceStyle }: Props) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = vars.colors.$static.light.color.white,
    textColor = vars.colors.$static.light.color.black,
    textSize,
    textWeight,
    textAlign = 'center',
    highlightTextColor = vars.colors.$static.light.yellow[400],
    highlightTextWeight,
  } = sliceStyle ?? {};

  const regexp = new RegExp(`(${highlightTexts?.join('|')})`, 'gi');
  const highlightText = text.split(regexp).map((word, index) => {
    if (highlightTexts?.some(query => new RegExp(query, 'i').test(word))) {
      return (
        <span
          key={`${word}-${index}`}
          style={{
            color: highlightTextColor,
            fontWeight: highlightTextWeight,
          }}
        >
          {word}
        </span>
      );
    }

    return word;
  });

  return (
    <Text
      fontSize="2xl"
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        color: textColor,
        background: backgroundColor,
        fontSize: textSize,
        fontWeight: textWeight,
        textAlign: textAlign,
        whiteSpace: 'pre-wrap',
        workBreak: 'keep-all',
      }}
    >
      {highlightText}
    </Text>
  )
};
