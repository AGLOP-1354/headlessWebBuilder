import { Box, BoxProps } from "@headless-web-builder/react-components-layout";

type Props = BoxProps;

export const DesktopFirstLayout = (props: Props) => {
  const { children, className, ...rest } = props;

  const currentClassName = ["min-h-full w-full relative", className].join(" ");

  return (
    <Box {...rest} className={currentClassName} >
      {children}
    </Box>
  )
}
