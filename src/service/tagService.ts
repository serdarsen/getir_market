import Countable from "../model/Countable";
import baseService from "./baseService";

const tagService = {
  findTags: async (options: any[]): Promise<Countable[]> => {
    const [searchTerm] = options;

    let url = "tags_countable";

    if (searchTerm) {
      url += `?name_like=${encodeURIComponent(searchTerm)}`;
    }

    const response = await baseService.get(url);

    const { data } = response || {};

    return data;
  },
};

export default tagService;
