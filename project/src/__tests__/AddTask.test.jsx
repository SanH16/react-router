import { fireEvent, render, screen } from "@testing-library/react";
import AddTask from "../components/task/AddTask";

describe("AddTasks", () => {
  it("should render correctly without crash", () => {
    const { container } = render(<AddTask />);
    expect(container).toBeInTheDocument();
  });

  it("should match with snapshots", () => {
    const { container } = render(<AddTask />);
    expect(container).toMatchSnapshot();
  });

  it("input element must has placeholder", () => {
    render(<AddTask />);
    const inputElement = screen.getByPlaceholderText(/add task/i);
    expect(inputElement).toHaveAttribute("placeholder", "Add task");
  });

  it('button element must have text "Add"', () => {
    render(<AddTask />);
    const buttonElement = screen.getByText(/add/i);
    expect(buttonElement).toHaveTextContent("Add");
  });

  it("should trigger input element onchange correcty", () => {
    render(<AddTask />);
    const inputElement = screen.getByPlaceholderText(/add task/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement).toHaveValue("test");
  });

  it("should trigger button element onclick correcty", () => {
    render(<AddTask />);
    const buttonElement = screen.getByText(/add/i);
    const inputElement = screen.getByPlaceholderText(/add task/i);

    fireEvent.click(buttonElement);
    expect(inputElement).toHaveValue("");
  });
});
