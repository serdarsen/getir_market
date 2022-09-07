import React from "react";
import CheckIcon from "../../asset/CheckIcon";
import { setPage, useAppDispatch } from "../../service";
import NextButton from "./NextButton";
import PageButton from "./PageButton";
import "./paginator.scss";
import PrevButton from "./PrevButton";

const Paginator: React.FC = () => {
  const dispatch = useAppDispatch();

  const onChangePageButton = (page: number, checked: boolean): void => {
    console.log(`${page} is checked: ${checked}`);
    dispatch(setPage(page));
  };

  return (
    <div className="paginator">
      <CheckIcon />
      <PrevButton />
      <PageButton
        id="pageButtonId1"
        name="pageButtonName"
        page={1}
        onChange={onChangePageButton}
      />
      <PageButton
        id="pageButtonId2"
        name="pageButtonName"
        page={2}
        onChange={onChangePageButton}
      />
      <NextButton />
    </div>
  );
};

export default Paginator;
