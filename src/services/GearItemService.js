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
  createNewGearItem(newGearItem) {
    return api.post("/gear-item", newGearItem);
  },
  getAllGearItemsForUser(newGearItem) {
    return api.get("/gear-item", newGearItem);
  }
};
