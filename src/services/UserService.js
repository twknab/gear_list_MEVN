import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.7:8000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  registerNewUser(newUser) {
    return api.post("/user", newUser);
  },
  loginExistingUser(existingUser) {
    return api.post("/user/login", existingUser);
  }
};
