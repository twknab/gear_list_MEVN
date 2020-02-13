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
  },
  getListAndItems(gearListId) {
    return api.get(`/gear-list/find-list?gearListId=${gearListId}`);
  },
  getItemsNotOnList(gearListId) {
    return api.post("/gear-list/find-list/diff-items", gearListId);
  },
  getListAndItemCompletions(gearListId) {
    return api.post("/gear-list/find-list", gearListId);
  },
  updateGearList(gearList) {
    return api.post("/gear-list/update", gearList);
  },
  deleteGearList(gearListId) {
    return api.get(`/gear-list/delete?gearListId=${gearListId}`);
  }
};
