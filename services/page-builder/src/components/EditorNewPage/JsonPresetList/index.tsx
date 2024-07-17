import { Fragment } from "react";
import { ValidateViewSchemaProps } from "@/src/hooks/useViewSchemaValidation";
import { Button } from "@headless-web-builder/react-components-button";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import { useToast } from "@headless-web-builder/react-components-toast";
import { Divider } from "@headless-web-builder/react-components-layout";

type Props = {
  schema: string;
  setSchema: (schema: string) => void;
  validateViewSchema: (props: ValidateViewSchemaProps) => void;
}

type Preset = {
  name: string;
  snippet: object;
};

export const JsonPresetList = ({ schema, setSchema, validateViewSchema }: Props) => {
  const { toast } = useToast();

  const presets: Preset[] = [{
    name: "TextSlice",
    snippet: ViewSliceSchemaSnippet.textSlice,
  },
    {
      name: "ImageSlice",
      snippet: ViewSliceSchemaSnippet.imageSlice,
    },
    {
      name: "ImageSliderSectionSlice",
      snippet: ViewSliceSchemaSnippet.imageSliderSectionSlice,
    },
    {
      name: "SpacingSlice",
      snippet: ViewSliceSchemaSnippet.spacingSlice,
    },
    {
      name: "accordionSlice",
      snippet: ViewSliceSchemaSnippet.accordionSlice,
    },
  ]

  const handleClick = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: () => {
        const parsedSchema = JSON.parse(schema);
        parsedSchema.slices.push(ViewSliceSchemaSnippet.textSlice);

        setSchema(formatObjectToJson(parsedSchema));
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message,
          },
        });
      },
    });
  }

  return (
    <>
      {presets.map(({ name, snippet }) => {
        const handleClick = () => {
          validateViewSchema({
            viewSchema: schema,
            onSuccess: () => {
              const objectifiedSchema = JSON.parse(schema);
              objectifiedSchema.slices.push(snippet);

              setSchema(formatObjectToJson(objectifiedSchema));
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

        return (
          <Fragment key={name}>
            <Button
              style={{ borderRadius: "0", width: "100%" }}
              variant="ghost"
              onClick={handleClick}
            >
              {name}
            </Button>
            <Divider />
          </Fragment>
        );
      })}
    </>
  )
}
