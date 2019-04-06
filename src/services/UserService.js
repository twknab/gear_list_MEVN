import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.0.130:8000",
  withCredentials: true,
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
  },
  getLoggedInUser() {
    return api.get("/user");
  },
  logoffUser() {
    return api.get("/user/logout");
  }
};
