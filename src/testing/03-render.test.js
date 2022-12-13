import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

test("show all tag html on app", () => {
  render(<App/>)
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug()
  const btn = screen.getByRole('button')
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug()
  fireEvent.click(btn.click)
})