import React from "react"
import { render } from "@testing-library/react"
import Button from "./Button"

test("renders button with label", () => {
  const { getByText } = render(<Button label="Click me" />)
  const buttonElement = getByText(/Click me/i)
  expect(buttonElement).toBeInTheDocument()
})
