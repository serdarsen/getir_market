import { PER_PAGE_ITEM_SIZE } from "../component/pagination/Pagination";
import { Item, Pageable } from "../model";
import baseService from "./baseService";

const itemService = {
  findItems: async (options: any[]):
Promise<Pageable<Item[]>> => {
    const [pageNo, sortOption, brandFilter, tagFilter] = options;

    const url = `items?${
      tagFilter.map(
        (tag: string) => `tags=${
          encodeURIComponent(tag)
        }`,
      ).join("&")
    }&${
      brandFilter.map(
        (brand: string) => `manufacturer=${
          encodeURIComponent(brand)
        }`,
      ).join("&")
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
