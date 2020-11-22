import axios from "axios";

const api = axios.create({
  baseURL: "/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export { api };
