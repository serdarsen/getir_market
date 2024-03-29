import { range } from "lodash";
import ArrowButton from "./ArrowButton";
import PageButton from "./PageButton";

interface Prop {
  id: string,
  pageNo: number;
  perPage: number;
  totalCount: number;
  onChangePageNo: (page: number) => void
}

const Pagination: React.FC<Prop> = ({
  id,
  pageNo,
  perPage,
  totalCount,
  onChangePageNo,
}: Prop) => {
  const pageSize = Math.ceil(totalCount / perPage) || 1;
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
    const first = range(1, limit + 1);
    const middle = range(pageNo - 1, pageNo + 2);
    const last = range(pageSize - limit + 1, pageSize + 1);

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
      onChangePageNo(page);
    }
  };

  const onClickLeftArrowButton = (): void => {
    if (pageNo > 1) {
      onChangePageNo(pageNo - 1);
    }
  };

  const onClickRightArrowButton = (): void => {
    if (pageNo < totalCount) {
      onChangePageNo(pageNo + 1);
    }
  };

  return (
    <div
      className="
        mt-[2.5rem]
        mb-[1rem]
        flex
        h-[2.5rem]
        flex-row
        items-center
        justify-center
        max-[570px]:flex-col"
    >
      <ArrowButton
        text="Prev"
        direction="left"
        onClick={onClickLeftArrowButton}
        disabled={!hasPrev}
      />
      <div
        className="
          mx-[2.8rem]
          flex
          h-[2.5rem]
          flex-row
          items-center
          justify-center
          gap-[0.1rem]"
      >
        {createPageNumbers().map((page: number) => (
          <PageButton
            id={`${id}pageButtonId${page}`}
            key={`${id}pageButtonKey${page}`}
            name={`${id}pageButtonName`}
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
