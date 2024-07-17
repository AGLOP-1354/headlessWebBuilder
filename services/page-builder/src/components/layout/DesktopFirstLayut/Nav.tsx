import { Flex, FlexProps } from "@headless-web-builder/react-components-layout";
import { vars } from '@headless-web-builder/themes'

type Props = FlexProps;

export const DesktopFirstNav = (props: Props) => {
  const {
    children,
    boxShadow = 'base',
    justify = 'right',
    className,
    padding = 2,
    ...rest
  } = props;

  const currentClassName = ["w-full h[-56px] fixed top-0 z-50 relative", className].join(" ");

  return (
    <Flex
      {...rest}
      padding={padding}
      justify={justify}
      boxShadow={boxShadow}
      className={currentClassName}
      style={{
        backgroundColor: vars.colors.$static.light.color.white,
      }}
    >
      {children}
    </Flex>
  )
}
