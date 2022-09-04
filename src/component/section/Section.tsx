import React, { useEffect } from "react";
import {
  findCompaniesFetch,
} from "../../service/CompanySlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../service/ReduxHelper";
import "./section.scss";

const Section: React.FC = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCompaniesFetch());
  }, [dispatch]);

  return (
    <section className="app__section">
      {JSON.stringify(companies, null, 2)}
    </section>
  );
};

export default Section;
