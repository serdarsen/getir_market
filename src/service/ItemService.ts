import axios from "axios";
import Item from "../model/Item";
import { JSON_API } from "./ServiceConstant";

export const findItems = async (): Promise<Item[]> => {
  const { data } = await axios.get(`${JSON_API}/items?_page=1&_limit=20`);

  return data;
};
