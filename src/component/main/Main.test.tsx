import React from "react";
import { renderWithProviders } from "../../test/testUtil";
import Main from "./Main";

test("renders main component", () => {
  const { renderResult } = renderWithProviders(<Main />);
  const { container, getByRole } = renderResult;

  expect(getByRole("main")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
