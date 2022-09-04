import axios from "axios";
import Company from "../model/Company";
import { JSON_API } from "./ServiceConstant";

export const findCompanies = async (): Promise<Company[]> => {
  const { data } = await axios.get(`${JSON_API}/companies`);

  return data;
};
