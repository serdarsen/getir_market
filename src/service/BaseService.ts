import axios from "axios";

export const PRODUCT_PLACEHOLDER_IMAGE_URL = "//www.colorbook.io/imagecreator.php?hex=C4C4C4&width=92&height=92&text=Item";
export const JSON_API = "/api";

const BaseService = {
  get: (url: string) => axios.get(`${JSON_API}/${url}`),
};

export default BaseService;
