import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.7:8000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  createNewGearItem(newGearItem) {
    return api.post("/gear-item", newGearItem);
  }
};
