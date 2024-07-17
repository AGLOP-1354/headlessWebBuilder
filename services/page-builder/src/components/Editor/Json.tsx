import { Editor, EditorProps } from "@monaco-editor/react";

type Props = EditorProps;

export const JsonEditor = (props: Props) => {
  const { height = '90vh', defaultLanguage= 'json', options, ...rest } = props;

  return (
    <Editor
      {...rest}
      height={height}
      defaultLanguage={defaultLanguage}
      options={{ fontSize: 16, formatOnPaste: true, options }}
    />
  )
}
