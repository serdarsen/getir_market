import { Company } from "../model";
import BaseService from "./BaseService";

const CompanyService = {
  findCompanies: async (): Promise<Company[]> => {
    const response = await BaseService.get("companies");

    const { data } = response || {};

    return data;
  },
};

export default CompanyService;
