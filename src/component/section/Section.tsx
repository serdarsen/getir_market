import React, { useEffect } from "react";
import { findCompaniesFetch } from "../../service/CompanySlice";
import { findItemsFetch } from "../../service/ItemSlice";
import { useAppDispatch, useAppSelector } from "../../service/ReduxHook";
import "./section.scss";

const Section: React.FC = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const items = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCompaniesFetch());
    dispatch(findItemsFetch());
  }, [dispatch]);

  console.log("companies: ", companies);
  console.log("items: ", items);

  return (
    <section className="app__section">
      Section
    </section>
  );
};

export default Section;
