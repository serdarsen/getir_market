import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/testRenderer";
import Main from "./Main";

test("renders main component", () => {
  const { renderResult } = renderWithProviders(<Main />);
  const { container } = renderResult;

  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
