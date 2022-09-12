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
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.item.pageable);
  const pageNo = useAppSelector((state) => state.pagination.pageNo);
  const pageSize = Math.ceil(items.totalCount / PER_PAGE_ITEM_SIZE) || 1;
  const hasPrev = pageNo > 1;
  const hasNext = pageNo < pageSize;

  const createPageNumbers = (): number[] => {
    const max = 9;
    const normalLimit = 4;
    const expandedLimit = 2;
    const pageSizeWithinMax = pageSize >= 1 && pageSize <= max;

    const createLimit = (): number => {
      if (pageSizeWithinMax) {
        return pageSize;
      }

      if (pageNo <= normalLimit || pageNo + normalLimit > pageSize) {
        return normalLimit;
      }

      return expandedLimit;
    };

    const limit = createLimit();
    const first = _.range(1, limit + 1);
    const middle = _.range(pageNo - 1, pageNo + 2);
    const last = _.range(pageSize - limit + 1, pageSize + 1);

    const createNumbers = (): number[] => {
      if (pageSizeWithinMax) {
        return [...first];
      }

      if (limit === normalLimit) {
        return [...first, -1, ...last];
      }

      return [...first, -1, ...middle, -2, ...last];
    };

    return createNumbers();
  };

  const onChangePageButton = (page: number): void => {
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
        {createPageNumbers().map((page: number) => (
          <PageButton
            id={`pageButtonId${page}`}
            key={`pageButtonKey${page}`}
            name="pageButtonName"
            pageNo={pageNo}
            value={page}
            onChange={() => onChangePageButton(page)}
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
