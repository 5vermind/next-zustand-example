import Axios from "axios";

const _config = {
  baseURL: `http://localhost:3000`,
  withCredentials: true,
};

const axios = Axios.create(_config);

export const fetcher = (url) =>
  axios.get(url).then((response) => response.data);
