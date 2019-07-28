import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
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
  },
  attachItemToLists(gearItemAndGearLists) {
    return api.post("/gear-list/attach", gearItemAndGearLists);
  },
  findListsWithItem(gearItemId) {
    return api.get(`/gear-list/find-item?gearItemId=${gearItemId}`);
  }
};
