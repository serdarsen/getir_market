import axios from "axios";
import { Company } from "../model/Company";
import { JSON_API } from "./ServiceConstant";

export const findCompanies = async (): Promise<Company[]> => {
  const response = await axios.get(`${JSON_API}/companies`);

  const { data } = response || {};

  return data;
};
