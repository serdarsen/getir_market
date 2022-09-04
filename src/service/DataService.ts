import axios from "axios";

const DataService = {
  findCompanies: () => {
    axios.get("api/companies/1").then(
      (response) => console.log("response: ", response),
    ).catch((e) => {
      console.error("Error while finding companies e: ", e);
      return null;
    });
  },
};

export default DataService;
