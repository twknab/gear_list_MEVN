import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.0.130:8000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getThings() {
    return api.get("/");
  }
};
