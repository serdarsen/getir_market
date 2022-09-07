import axios from "axios";
import { Item, Pageable } from "../model";
import { JSON_API } from "./ServiceConstant";

export const findItems = async (): Promise<Pageable<Item[]>> => {
  const response = await axios.get(`${JSON_API}/items?_page=1&_limit=16`);

  const { data, headers = {} } = response || {};
  const totalCount = parseInt(headers["x-total-count"] || "0", 10);
  const pageable = { data, totalCount };

  return pageable;
};
