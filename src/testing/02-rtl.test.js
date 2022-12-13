import { render, screen } from "@testing-library/react"
import App from "../App"


test("Greetings existed user on application", () => {
  render(<App/>)
  const text = screen.getByText("Hello Cuy!")
  expect(text).toBeInTheDocument()
})