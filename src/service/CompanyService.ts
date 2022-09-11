import { Company } from "../model";
import BaseService from "./BaseService";

const CompanyService = {
  findCompanies: async (options: any[]): Promise<Company[]> => {
    const [searchTerm] = options;

    let url = "companies";

    if (searchTerm) {
      url += `?name_like=${encodeURIComponent(searchTerm)}`;
    }

    const response = await BaseService.get(url);

    const { data } = response || {};

    return data;
  },
};

export default CompanyService;
