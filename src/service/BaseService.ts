import axios from "axios";

const isDev = process.env.DEV;

if (isDev) {
  const { location } = window || {};
  const { protocol, hostname } = location || {};
  axios.defaults.baseURL = `${protocol}//${hostname}:3004`;
}

export const PRODUCT_PLACEHOLDER_IMAGE_URL = "//www.colorbook.io/imagecreator.php?hex=C4C4C4&width=92&height=92&text=Item";

export const JSON_API_URL = "/api";

const BaseService = {
  get: (url: string) => axios.get(`${JSON_API_URL}/${url}`),
};

export default BaseService;
