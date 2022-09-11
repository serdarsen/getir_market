import BaseService from "./BaseService";

const TagService = {
  findTags: async (options: any[]): Promise<string[]> => {
    const [searchTerm] = options;

    let url = "tags";

    if (searchTerm) {
      url += `?name_like=${encodeURIComponent(searchTerm)}`;
    }

    const response = await BaseService.get(url);

    const { data } = response || {};

    return data;
  },
};

export default TagService;
