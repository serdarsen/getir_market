import { Company } from "../model";
import baseService from "./baseService";

const companyService = {
  findCompanies: async (options: any[]): Promise<Company[]> => {
    const [searchTerm] = options;

    let url = "companies";

    if (searchTerm) {
      url += `?name_like=${encodeURIComponent(searchTerm)}`;
    }

    const response = await baseService.get(url);

    const { data } = response || {};

    return data;
  },
};

export default companyService;
