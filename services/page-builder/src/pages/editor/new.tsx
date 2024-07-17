import React, { useState } from "react";
import ShortUniqueId from "short-unique-id";
import { Button } from "@headless-web-builder/react-components-button";
import { useToast } from "@headless-web-builder/react-components-toast";

import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayut";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayut/Nav";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayut/Body";
import { JsonEditor } from "@/src/components/Editor/Json";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import { previewStorage } from "@/src/utils/storage";
import { useViewSchemaValidation } from "@/src/hooks/useViewSchemaValidation";
import { DesktopFirstSideNav } from "@/src/components/layout/DesktopFirstLayut/SideNav";
import { JsonPresetList } from "@/src/components/EditorNewPage/JsonPresetList";
import { putViewDetail } from "@/src/apis/worker/putViewDetail";

const EditorNewPage: React.FC = () => {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const [viewId] = useState(randomUUID());

  const { toast } = useToast();

  const [schema, setSchema] = useState(formatObjectToJson(ViewSliceSchemaSnippet.init));

  const handleReset = () => setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));

  const handlePreview = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: () => {
        previewStorage.set(viewId, schema);

        window.open(`/preview/${viewId}`, "_black");
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message,
          }
        })
      }
    })
  }

  const handlePublish = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: async () => {
        const objectifiedSchema = JSON.parse(schema);
        const convertedSlug = objectifiedSchema.slug.split(" ").join("-");

        const slug = `${convertedSlug}-${viewId}`;

        try {
          await putViewDetail({
            viewId,
            data: {
              value: JSON.stringify(schema),
              metadata: {
                title: slug,
                createAt: new Date().toISOString(),
              },
            }
          });

          window.open(`/view/${slug}`, "_blank");
        } catch (error) {
          toast({
            payload: {
              // @ts-ignore
              message: `[Fetch Error] ${error.message}`,
            },
          });
        }
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message,
          },
        });
      },
    });
  };

  const { validateViewSchema, handleEditorValidation } = useViewSchemaValidation();

  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>
        <Button variant="outline" size="md" color="gray" onClick={handlePreview}>
          미리보기
        </Button>
        <Button size="md" color="green" onClick={handlePublish}>
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody padding={0}>
        <DesktopFirstSideNav>
          <JsonPresetList schema={schema} setSchema={setSchema} validateViewSchema={validateViewSchema} />
        </DesktopFirstSideNav>
        <JsonEditor
          value={schema}
          onChange={(value) => setSchema(value || "")}
          onValidate={handleEditorValidation}
        />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewPage;
