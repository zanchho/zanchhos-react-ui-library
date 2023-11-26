// Button.stories.js

import { Button } from "../components/Button/Button"
import { action } from "@storybook/addon-actions"

export default {
  title: "Example/Button",
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
    className: {
      control: "text",
      description: "Classnames if predefined Styles are disabled",
    },
    style: { control: "text", description: "Inline Styling" },
    disabled: { control: "boolean", description: "Disables the Component" },
    onClick: {
      control: "function",
      description: "Executed Function if Button is Clicked",
    },
  },
}

export const WithText = {
  args: {
    label: "Click",
    onClick: action("Button clicked"),
    isPreStyled: true,
    disabled: false,
  },
}

export const WithEmoji = {
  args: {
    label: "🦽🛹🚀🚁",
    onClick: action("🦽🛹🚀🚁 clicked"),
    isPreStyled: false,
    className: "bg-red",
    disabled: false,
  },
}
