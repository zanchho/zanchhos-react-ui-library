// Button.stories.js

import { Button } from "../components/Button/Button"

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
    backgroundColor: { control: "color" },
  },
}

export const WithText = {
  args: {
    label: "Click",
  },
}

export const WithEmoji = {
  args: { label: "🦽🛹🚀🚁" },
}
