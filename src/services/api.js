import axios from "axios";

const URL = "https://dummyjson.com/";

const instance = axios.create({
  baseURL: URL,
});

export default instance;
