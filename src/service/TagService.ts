import BaseService from "./BaseService";

const TagService = {
  findTags: async (): Promise<string[]> => {
    const response = await BaseService.get("tags");

    const { data } = response || {};

    return data;
  },
};

export default TagService;
