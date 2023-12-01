// Button.stories.js

import { Button } from "../components/Button/Button"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      control: "text",
      description: "Overwritten Label",
    },
    isPreStyled: {
      control: "boolean",
      description: "Declare if using predefined Styles",
    },

    hoverStyle: {
      control: "object",
      description: "React CSS Styles Object",
    },
    disabledStyle: {
      control: "object",
      description: "React CSS Styles Object",
    },
    disabled: { control: "boolean", description: "Disables the Component" },
    onClick: {
      control: "function",
      description: "Executed Function if Button is Clicked",
    },
  },
}

export const Prestyled = {
  args: {
    label: "Click This",
    onClick: action("Button clicked"),
    isPreStyled: true,
    disabled: false,
  },
}

export const Unstyled = {
  args: {
    label: "Click This",
    onClick: action("🦽🛹🚀🚁 clicked"),
    isPreStyled: false,
    disabled: false,
  },
}
