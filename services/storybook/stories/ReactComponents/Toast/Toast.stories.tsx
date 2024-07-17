import "@headless-web-builder/react-components-button/style.css";
import { Button } from '@headless-web-builder/react-components-button';
import React from "react";

import { ToastProvider, useToast } from '@headless-web-builder/react-components-toast';
import "@headless-web-builder/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
}

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
