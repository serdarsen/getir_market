import _ from "lodash";
import React from "react";
import {
  setPageNo,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import ArrowButton from "./ArrowButton";
import PageButton from "./PageButton";
import "./pagination.scss";

export const PER_PAGE_ITEM_SIZE = 16;

const Pagination: React.FC = () => {
  const items = useAppSelector((state) => state.item.pageable);
  const pageNo = useAppSelector((state) => state.pagination.pageNo);
  const dispatch = useAppDispatch();

  const pageSize = Math.ceil(items.totalCount / PER_PAGE_ITEM_SIZE);

  const hasPrev = pageNo > 1;
  const hasNext = pageNo < pageSize;

  const createPageNumbers = (): number[] => {
    const limit = pageNo <= 4 || pageNo > pageSize - 4 ? 4 : 2;
    const first = _.range(1, limit + 1);
    const middle = _.range(pageNo - 1, pageNo + 2);
    const last = _.range(pageSize - limit + 1, pageSize + 1);

    const normal = [...first, 0, ...last];
    const expanded = [...first, 0, ...middle, 0, ...last];

    const pageNumbers = limit === 2 ? expanded : normal;

    return pageNumbers;
  };

  const onChangePageButton = (page: number, checked: boolean): void => {
    if (page > 0) {
      dispatch(setPageNo(page));
    }
  };

  const onClickLeftArrowButton = (): void => {
    if (pageNo > 1) {
      dispatch(setPageNo(pageNo - 1));
    }
  };

  const onClickRightArrowButton = (): void => {
    if (pageNo < items.totalCount) {
      dispatch(setPageNo(pageNo + 1));
    }
  };

  return (
    <div className="pagination">
      <ArrowButton
        text="Prev"
        direction="left"
        onClick={onClickLeftArrowButton}
        disabled={!hasPrev}
      />
      <div className="pagination__page-button-group">
        {createPageNumbers().map((page: number, index: number) => (
          <PageButton
            id={`pageButtonId${page}`}
            key={`pageButtonId${page}${index}`}
            name="pageButtonName"
            pageNo={pageNo}
            value={page}
            onChange={onChangePageButton}
          />
        ))}
      </div>
      <ArrowButton
        text="Next"
        direction="right"
        onClick={onClickRightArrowButton}
        disabled={!hasNext}
      />
    </div>
  );
};

export default Pagination;
