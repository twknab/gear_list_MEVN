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
  registerNewUser(newUser) {
    return api.post("/user", newUser);
  }
};
