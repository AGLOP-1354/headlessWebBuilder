import "@headless-web-builder/react-components-button/style.css";
import { Button as _Button } from '@headless-web-builder/react-components-button';
import "@headless-web-builder/react-components-layout/style.css";
import { Text } from "@headless-web-builder/react-components-layout";
import { vars } from "@headless-web-builder/themes";
import { useButton, useToggleButton } from "@headless-web-builder/react-hooks-button";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};

export const TextButtonStory = {
  render: () => {
    const {
      buttonProps,
    } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("ttt");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  }
};


export const ToggleButtonStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton({ elementType: 'button' }, false);

    return (
      <_Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "😀" : "😂"}
      </_Button>
    );
  },
};
