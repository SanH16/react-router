import { render, screen } from "@testing-library/react";
import TaskList from "../components/task/TaskList";

describe("TaskList", () => {
  it("should render TaskList correctly without crash", () => {
    const { container } = render(<TaskList />);
    expect(container).toBeInTheDocument();
  });

  it("should render initial three task items", () => {
    render(<TaskList />);
    const taskItems = screen.getAllByTestId("task-item");
    expect(taskItems.length).toBeTruthy();
    expect(taskItems.length).not.toBe(undefined);
    expect(taskItems.length).toBe(3);
    // expect(taskItems).toHaveLength(3);

    expect(taskItems[0]).toHaveTextContent("Philosopher’s Path");
    // expect(taskItems[1]).toHaveTextContent("Visit the temple");
    // expect(taskItems[2]).toHaveTextContent("Drink matcha");
  });
});
