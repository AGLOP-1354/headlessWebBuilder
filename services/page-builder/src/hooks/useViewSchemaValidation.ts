import { useState } from "react";
import { ViewSchema } from "@/src/utils/validation/schema/view";

type FormatMarker = {
  message: string;
  startLineNumber: number;
  endLineNumber: number;
}

type ValidateError = {
  message: string;
}

export type ValidateViewSchemaProps = {
  viewSchema: string;
  onSuccess?: () => void;
  onError?: (error: ValidateError) => void;
};

export const useViewSchemaValidation = () => {
  const [formatMarkers, setFormatMarkers] = useState<FormatMarker[]>([]);

  const handleEditorValidation = (markers: FormatMarker[]) => {
    setFormatMarkers(markers);
  };

  const validateViewSchema = ({ viewSchema, onSuccess, onError }: ValidateViewSchemaProps) => {
    const hasFormatMarkers = formatMarkers.length > 0;

    if (hasFormatMarkers) {
      const firstMarker = formatMarkers[0];

      return onError?.({
        message: `[${firstMarker.startLineNumber}:${firstMarker.endLineNumber}] ${firstMarker.message}`,
      });
    }

    // ViewSchema validation
    const parsedViewSchema = JSON.parse(viewSchema);
    const validationViewSchema = ViewSchema.safeParse(parsedViewSchema);

    if (!validationViewSchema.success) {
      const firstError = validationViewSchema.error.errors[0];
      return onError?.({
        message: `[${firstError.code}:${firstError.path}] ${firstError.message}`,
      });
    }

    onSuccess?.();
  };

  return {
    validateViewSchema,
    handleEditorValidation,
  }
};
