import { Company } from "../model";
import BaseService from "./BaseService";

export const findCompanies = async (): Promise<Company[]> => {
  const response = await BaseService.get("companies");

  const { data } = response || {};

  return data;
};
