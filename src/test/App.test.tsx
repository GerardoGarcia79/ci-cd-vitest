import App from "../App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render a counter button", () => {
    render(<App />);

    expect(screen.getByText(/count/i)).toBeInTheDocument();
    expect(screen.getByText(/3.0/i)).toBeInTheDocument();
  });
});
