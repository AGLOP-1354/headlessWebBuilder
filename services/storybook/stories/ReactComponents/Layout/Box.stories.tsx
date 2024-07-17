import "@headless-web-builder/react-components-layout/style.css";
import { Box as _Box } from '@headless-web-builder/react-components-layout';

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: 'button',
    padding: '5',
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: 'md',
  }
};
