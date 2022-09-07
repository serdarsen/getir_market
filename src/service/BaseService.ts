import axios from "axios";

const JSON_API = "/api";

const BaseService = {
  get: (url: string) => axios.get(`${JSON_API}/${url}`),
};

export default BaseService;
