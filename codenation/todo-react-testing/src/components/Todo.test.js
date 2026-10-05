import React from "react";

import { render, waitForElement, fireEvent } from "@testing-library/react";

import Todo from "./Todo";

describe("tests for todo component", () => {
  it("should add new task when form has been submitted", async () => {
    // render component
    const { getByTestId, getByText } = render(<Todo />);

    //search input
    const fieldNode = await waitForElement(() => getByTestId("form-field"));

    // type in input
    const newTask = "testing";
    fireEvent.change(fieldNode, { target: { value: newTask } });

    expect(fieldNode.value).toEqual(newTask);

    // search button
    const btnNode = await waitForElement(() => getByTestId("form-btn"));

    // click on button
    fireEvent.click(btnNode);

    const tdNode = await waitForElement(() => getByText(newTask));

    expect(tdNode).toBeDefined();
  });
});
