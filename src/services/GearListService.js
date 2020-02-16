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
  attachOneItemToManyLists(gearItemAndGearLists) {
    return api.post("/gear-list/attach", gearItemAndGearLists);
  },
  attachManyItemsToOneList(listIdAndItemSelections) {
    console.log("hello");
    return api.post("/gear-list/attach/many-items", listIdAndItemSelections);
  },
  findListsWithItem(gearItemId) {
    return api.get(`/gear-list/find-item?gearItemId=${gearItemId}`);
  },
  getListAndItems(gearListId) {
    return api.get(`/gear-list/find-list?gearListId=${gearListId}`);
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
