import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

test("renders the pagination without separator", () => {
  const onChangePageNo = jest.fn();
  render(
    <Pagination
      pageNo={1}
      perPageItemSize={2}
      totalCount={14}
      onChangePageNo={onChangePageNo}
    />,
  );

  // There are 7 page buttons displaying page numbers
  [1, 2, 3, 4, 5, 6, 7].forEach((name) => {
    const pageButton = screen.getByRole("radio", { name: `${name}` });
    expect(pageButton).toBeInTheDocument();

    // The first page button is checked others are not.
    if (name === 1) {
      expect(pageButton).toBeChecked();
    } else {
      expect(pageButton).not.toBeChecked();
    }
  });

  // There is no page button acting as a separator
  const separator = screen.queryByRole("radio", { name: "..." });
  expect(separator).not.toBeInTheDocument();
});

test("renders the pagination first page selected", () => {
  const onChangePageNo = jest.fn();
  render(
    <Pagination
      pageNo={1}
      perPageItemSize={2}
      totalCount={21}
      onChangePageNo={onChangePageNo}
    />,
  );

  // Prev button is disabled.
  const prevButton = screen.getByRole("button", { name: /Prev/ });
  expect(prevButton).toBeInTheDocument();
  expect(prevButton).toBeDisabled();

  // Next button is enabled.
  const nextButton = screen.getByRole("button", { name: /Next/ });
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toBeEnabled();

  // There are 8 page buttons displaying page numbers
  [1, 2, 3, 4, 8, 9, 10, 11].forEach((name) => {
    const pageButton = screen.getByRole("radio", { name: `${name}` });
    expect(pageButton).toBeInTheDocument();

    // The first page button is checked others are not.
    if (name === 1) {
      expect(pageButton).toBeChecked();
    } else {
      expect(pageButton).not.toBeChecked();
    }
  });

  // There is 1 page button acting as a separator
  const separator = screen.getByRole("radio", { name: "..." });
  expect(separator).toBeInTheDocument();
});

test("renders the pagination fifth page selected", () => {
  const onChangePageNo = jest.fn();
  render(
    <Pagination
      pageNo={5}
      perPageItemSize={2}
      totalCount={21}
      onChangePageNo={onChangePageNo}
    />,
  );

  // Prev button is enabled.
  const prevButton = screen.getByRole("button", { name: /Prev/ });
  expect(prevButton).toBeInTheDocument();
  expect(prevButton).toBeEnabled();

  // Next button is enabled.
  const nextButton = screen.getByRole("button", { name: /Next/ });
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toBeEnabled();

  // There are 7 page buttons displaying page numbers
  [1, 2, 4, 5, 6, 10, 11].forEach((name) => {
    const pageButton = screen.getByRole("radio", { name: `${name}` });
    expect(pageButton).toBeInTheDocument();

    // The fifth page button is checked others are not.
    if (name === 5) {
      expect(pageButton).toBeChecked();
    } else {
      expect(pageButton).not.toBeChecked();
    }
  });

  // There is 2 page buttons acting as a separator
  const separators = screen.getAllByRole("radio", { name: "..." });
  expect(separators).toHaveLength(2);
});

test("renders the pagination last page selected", () => {
  const onChangePageNo = jest.fn();
  render(
    <Pagination
      pageNo={11}
      perPageItemSize={2}
      totalCount={21}
      onChangePageNo={onChangePageNo}
    />,
  );

  // Prev button is enabled.
  const prevButton = screen.getByRole("button", { name: /Prev/ });
  expect(prevButton).toBeInTheDocument();
  expect(prevButton).toBeEnabled();

  // Next button is disabled.
  const nextButton = screen.getByRole("button", { name: /Next/ });
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toBeDisabled();

  // There are 8 page buttons displaying page numbers
  [1, 2, 3, 4, 8, 9, 10, 11].forEach((name) => {
    const pageButton = screen.getByRole("radio", { name: `${name}` });
    expect(pageButton).toBeInTheDocument();

    // The eleventh page button is checked others are not.
    if (name === 11) {
      expect(pageButton).toBeChecked();
    } else {
      expect(pageButton).not.toBeChecked();
    }
  });

  // There is 1 page button acting as a separator
  const separator = screen.getByRole("radio", { name: "..." });
  expect(separator).toBeInTheDocument();
});

test("changes page no by prev, next, or page buttons", async () => {
  const onChangePageNo = jest.fn();
  const pageNo = 5;

  render(
    <Pagination
      pageNo={pageNo}
      perPageItemSize={2}
      totalCount={21}
      onChangePageNo={onChangePageNo}
    />,
  );

  const nextButton = screen.getByRole("button", { name: /Next/ });
  userEvent.click(nextButton);

  await waitFor(() => expect(onChangePageNo).toHaveBeenCalledWith(pageNo + 1));
  expect(onChangePageNo).toHaveBeenCalledTimes(1);
  onChangePageNo.mockClear();

  const prevButton = screen.getByRole("button", { name: /Prev/ });
  userEvent.click(prevButton);

  await waitFor(() => expect(onChangePageNo).toHaveBeenCalledWith(pageNo - 1));
  expect(onChangePageNo).toHaveBeenCalledTimes(1);
  onChangePageNo.mockClear();

  // There are 7 page buttons displaying page numbers
  [1, 2, 4, 5, 6, 10, 11].forEach(async (name) => {
    const pageButton = screen.getByRole("radio", { name: `${name}` });
    userEvent.click(pageButton);

    await waitFor(() => expect(onChangePageNo).toHaveBeenCalledWith(name));
    expect(onChangePageNo).toHaveBeenCalledTimes(1);
    onChangePageNo.mockClear();
  });
});
