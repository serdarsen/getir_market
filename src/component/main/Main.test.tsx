import { screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../test/testUtil";
import Main from "./Main";

test("renders main component", () => {
  const { renderResult } = renderWithProviders(<Main />);
  const { container } = renderResult;

  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
