import Countable from "../model/Countable";
import baseService from "./baseService";

const companyService = {
  findCompanies: async (options: string[]): Promise<Countable[]> => {
    const [searchTerm] = options;

    let url = "companies_countable";

    if (searchTerm) {
      url += `?name_like=${encodeURIComponent(searchTerm)}`;
    }

    const response = await baseService.get(url);

    const { data } = response || {};

    return data;
  },
};

export default companyService;
