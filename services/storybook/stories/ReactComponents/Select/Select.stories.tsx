import "@headless-web-builder/react-components-select/style.css";
import { Select } from "@headless-web-builder/react-components-select";
import React from "react";

import "@headless-web-builder/react-components-layout/style.css";


export default {
  title: "React Components/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const SelectStory = {
  render: () => <Select>
    <option value="1">1</option>
    <option value="2">2</option>
  </Select>,
};
