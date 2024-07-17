import React from 'react';
import Head from "next/head";
import { SchemaProps } from "@/src/utils/validation/schema/types"
import { MetaDataSliceSchema } from "@/src/utils/validation/schema/slices";;

type Props = SchemaProps<typeof MetaDataSliceSchema>

export const MetadataSlice: React.FC<Props> = ({
  title,
  ogTitle,
  ogDescription,
}: Props) => {
  const currentOGTitle = ogTitle ?? title;

  return (
    <Head>
      {title && <title>{title}</title>}
      {currentOGTitle && <meta property="og:title" content={currentOGTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
    </Head>
  );
};
