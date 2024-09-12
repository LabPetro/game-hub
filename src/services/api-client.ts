import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa57c6cb184a46878abc86636c20ab5b",
  },
});
