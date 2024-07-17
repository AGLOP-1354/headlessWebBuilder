import { Flex, FlexProps } from "@headless-web-builder/react-components-layout";

type Props = FlexProps;

export const DesktopFirstBody = (props: Props) => {
  const { children, padding = 2, className, ...rest } = props;

  const currentClassName = ["w-full min-h-screen relative top-0", className].join(" ");

  return (
    <Flex {...rest} padding={padding} className={currentClassName}>
      {children}
    </Flex>
  )
}
