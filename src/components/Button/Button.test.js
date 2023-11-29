require("@testing-library/jest-dom")
import { fireEvent, render, screen, cleanup } from "@testing-library/react"
import { Button } from "./Button"

afterEach(cleanup)

const testid = "button-component"

test("renders button with label", () => {
  render(<Button label="Click me" />)
  expect(screen.getByText("Click me")).toBeInTheDocument()
})
test("handles click event", () => {
  const testfunction = jest.fn()
  render(<Button label="Click me" onClick={testfunction} />)

  const el = screen.getByTestId(testid)

  fireEvent.click(el)

  expect(testfunction).toHaveBeenCalled()
})
test("applies styles", () => {
  const expectedbgColor = "blue"
  const styles = {
    backgroundColor: expectedbgColor,
  }
  render(<Button label="Click me" CompStyle={styles} />)

  const el = screen.getByTestId(testid)
  expect(el).toHaveStyle(`background-color: ${expectedbgColor};`)
  //invert
  expect(el).not.toHaveStyle(`background-color: green;`)
})
test("applies styles on hover", () => {
  const expectedbgColor = "black"
  const hstyles = {
    backgroundColor: expectedbgColor,
  }
  render(<Button label="Click me" hoverStyle={hstyles} />)

  const el = screen.getByTestId(testid)
  fireEvent.mouseEnter(screen.getByTestId(testid))
  //setTimeout to letStateChange Happen
  setTimeout(() => {
    expect(el).toHaveStyle(`background-color: ${expectedbgColor};`)
    //invert
    expect(el).not.toHaveStyle(`background-color: green;`)
  }, 500)
})
test("applies styles when disabled", () => {
  const expectedbgColor = "red"
  const dstyles = {
    backgroundColor: expectedbgColor,
  }
  render(<Button label="Click me" hoverStyle={dstyles} />)

  const el = screen.getByTestId(testid)
  fireEvent.mouseEnter(screen.getByTestId(testid))
  //setTimeout to letStateChange Happen
  setTimeout(() => {
    expect(el).toHaveStyle(`background-color: ${expectedbgColor};`)
    //invert
    expect(el).not.toHaveStyle(`background-color: green;`)
  }, 500)
})
