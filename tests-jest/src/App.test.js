import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing main component", () => {
  test("Should render correct", () => {
    render(<App />);
    expect(screen.getByText("cadastrar")).toBeInTheDocument();
  });

  test("Should add 'estudar react' on the list", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-task"), {
      target: {
        value: "estudar react",
      },
    });
    fireEvent.click(screen.getByTestId("btn-task"));

    expect(screen.getByText("estudar react")).toBeInTheDocument();
  });
});
