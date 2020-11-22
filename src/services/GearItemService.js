import axios from "axios";

const api = axios.create({
  baseURL: "/api",
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
  getAllGearItemsForUser() {
    return api.get("/gear-item");
  },
  getItem(gearItemId) {
    return api.get(`/gear-item/find-item?gearItemId=${gearItemId}`);
  },
  updateGearItem(gearItem) {
    return api.post("/gear-item/update", gearItem);
  },
  deleteGearItem(gearItemId) {
    return api.get(`/gear-item/delete?gearItemId=${gearItemId}`);
  },
  changeCompleteStatus(gearItemId, gearListId, completedStatus) {
    return api.get(
      `/gear-item/complete?gearItemId=${gearItemId}&gearListId=${gearListId}&gearCompletedStatus=${completedStatus}`
    );
  }
};
