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
  createNewGearList(newGearList) {
    return api.post("/gear-list", newGearList);
  },
  getAllGearListsForUser() {
    return api.get("/gear-list");
  }
};
