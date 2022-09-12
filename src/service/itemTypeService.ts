import Countable from "../model/Countable";
import baseService from "./baseService";

const itemTypeService = {
  findItemTypes: async (): Promise<Countable[]> => {
    const url = "item_types_countable";

    const response = await baseService.get(url);

    const { data } = response || {};

    return data;
  },
};

export default itemTypeService;
