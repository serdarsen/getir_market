import React from "react";
import { setPage, useAppDispatch, useAppSelector } from "../../service";
import ArrowButton from "./ArrowButton";
import PageButton from "./PageButton";
import "./paginator.scss";

const Paginator: React.FC = () => {
  const items = useAppSelector((state) => state.items.pageable);
  const dispatch = useAppDispatch();

  const pageSize = Math.ceil(items.totalCount / items.data.length);
  console.log("pageSize: ", pageSize);

  const first = [1, 2, 3, 4];
  const last = [106, 107, 108, 109];

  const onChangePageButton = (page: number, checked: boolean): void => {
    console.log(`${page} is checked: ${checked}`);
    dispatch(setPage(page));
  };

  return (
    <div className="paginator">
      <ArrowButton text="Prev" direction="left" />
      <div className="paginator__page-button-group">
        {first.map((page) => (
          <PageButton
            id={`pageButtonId${page}`}
            key={`pageButtonId${page}`}
            name="pageButtonName"
            page={page}
            onChange={onChangePageButton}
          />
        ))}
        <div className="paginator__seperator">...</div>
        {last.map((page) => (
          <PageButton
            id={`pageButtonId${page}`}
            key={`pageButtonId${page}`}
            name="pageButtonName"
            page={page}
            onChange={onChangePageButton}
          />
        ))}
      </div>
      <ArrowButton text="Next" direction="right" />
    </div>
  );
};

export default Paginator;
