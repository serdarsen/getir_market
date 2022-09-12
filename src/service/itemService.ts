import { PER_PAGE_ITEM_SIZE } from "../component/pagination/Pagination";
import { Item, Pageable } from "../model";
import baseService from "./baseService";

const itemService = {
  findItems: async (options: any[]):
Promise<Pageable<Item[]>> => {
    const [pageNo, sortOption, brandFilter, tagFilter] = options;

    const createFilterQuery = (filters: string[], slug: string): string => {
      if (filters.length === 0 || filters.includes("All")) {
        return "";
      }

      return filters.map(
        (filter: string) => `${slug}_like=${
          encodeURIComponent(filter)
        }`,
      ).join("&");
    };

    const url = `items?${
      createFilterQuery(tagFilter, "tags")
    }&${
      createFilterQuery(brandFilter, "manufacturer")
    }&_order=${
      sortOption[0]
    }&_sort=${
      sortOption[1]
    }&_page=${
      pageNo
    }&_limit=${
      PER_PAGE_ITEM_SIZE
    }`;

    const response = await baseService.get(url);
    const { data, headers = {} } = response || {};
    const totalCount = parseInt(headers["x-total-count"] || "0", 10);
    const pageable = { data, totalCount };

    return pageable;
  },
};

export default itemService;
