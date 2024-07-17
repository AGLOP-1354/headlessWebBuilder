import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { previewStorage } from "@/src/utils/storage";
import { useViewSchemaSlice } from "@/src/hooks/useViewSchemaSlice";
import { MobileFirstLayout } from "@/src/components/layout/MobileFirstLayout";

const PreviewPage = () => {
  const router = useRouter();
  const { viewId } = router.query;
  const [viewSchema, setViewSchema] = useState(ViewSliceSchemaSnippet.init);

  useEffect(() => {
    if (!viewId) return;

    const stringifiedViewSchema = previewStorage.get(viewId as string);

    if (stringifiedViewSchema) setViewSchema(JSON.parse(stringifiedViewSchema));
  }, [viewId]);

  const slices = useViewSchemaSlice(viewSchema);

  return (
    <MobileFirstLayout>
      {slices}
    </MobileFirstLayout>
  )
}

export default PreviewPage;
