import { productConst } from "../constant";
import { Item, Pageable, PageRequest } from "../model";
import baseService from "./baseService";

const itemService = {
  findItems: async (options: PageRequest[]): Promise<Pageable<Item[]>> => {
    const [pageRequest] = options;
    const {
      pageNo, sortOption, brandFilter, tagFilter, itemTypeFilter,
    } = pageRequest;

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
    }&${
      createFilterQuery(itemTypeFilter, "itemType")
    }&_order=${
      sortOption[0]
    }&_sort=${
      sortOption[1]
    }&_page=${
      pageNo
    }&_limit=${
      productConst.PER_PAGE_ITEM_SIZE
    }`;

    const response = await baseService.get(url);
    const { data, headers = {} } = response || {};
    const totalCount = parseInt(headers["x-total-count"] || "0", 10);
    const pageable = { data, totalCount };

    return pageable;
  },
};

export default itemService;
