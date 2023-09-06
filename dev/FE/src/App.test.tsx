import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("test", () => {
  test("!!", () => {
    expect(1).toBe(1);
  });

  test("App component render", () => {
    render(<App />);
  });
});
