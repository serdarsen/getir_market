import { Item, Pageable } from "../model";
import BaseService from "./BaseService";

export const findItems = async (): Promise<Pageable<Item[]>> => {
  const response = await BaseService.get("items?_page=109&_limit=16");

  const { data, headers = {} } = response || {};
  const totalCount = parseInt(headers["x-total-count"] || "0", 10);
  const pageable = { data, totalCount };

  return pageable;
};
