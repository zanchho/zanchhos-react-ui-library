// TestInputField.stories.js
import React from "react"
import { TextInputField } from "../components/TextInputField/TextInputField"

export default {
  title: "Components/TextInputField",
  component: TextInputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: { description: "Initial Value" },
    onChange: {
      control: "function",
      description: "Function which gets the onChange event back",
    },
    onBlur: {
      control: "function",
      description: "Function which gets the onBlur event back",
    },
    placeholder: { control: "text", description: "Overwritten Placeholder" },

    alwaysFilled: {
      control: "boolean",
      description:
        "If Enabled the Component resets his Value to the DefaultValue if value is Empty",
    },
    disabled: { control: "boolean", description: "Disables Comonent" },
  },
}
export const defaultText = {
  args: {
    defaultValue: "Default Value",
    placeholder: "placeholder",
    alwaysFilled: true,
    disabled: false,
  },
}
export const defaultTextDisabled = {
  args: {
    defaultValue: "Default Value",
    placeholder: "placeholder",
    disabled: true,
  },
}
export const Enabled = { args: { placeholder: "Type Here" } }
export const Disabled = {
  args: { placeholder: "Disabled Text", disabled: true },
}
