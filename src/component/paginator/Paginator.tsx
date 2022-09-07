import React from "react";
import PageButton from "./PageButton";
import "./paginator.scss";

const Paginator: React.FC = () => {
  const onChangePageButton = (id: string, checked: boolean): void => {
    console.log(`${id} is checked: ${checked}`);
  };

  return (
    <div className="paginator">
      <PageButton
        id="pageButtonId1"
        name="pageButtonName"
        text="1"
        onChange={onChangePageButton}
      />
      <PageButton
        id="pageButtonId2"
        name="pageButtonName"
        text="2"
        onChange={onChangePageButton}
      />
    </div>
  );
};

export default Paginator;
