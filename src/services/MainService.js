import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
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
