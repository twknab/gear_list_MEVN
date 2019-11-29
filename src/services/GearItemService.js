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
  createNewGearItem(newGearItem) {
    return api.post("/gear-item", newGearItem);
  },
  getAllGearItemsForUser() {
    return api.get("/gear-item");
  },
  deleteGearItem(gearItemId) {
    return api.get(`/gear-item/delete?gearItemId=${gearItemId}`);
  },
  changeCompleteStatus(gearItemId, completedStatus) {
    return api.get(
      `/gear-item/complete?gearItemId=${gearItemId}&gearCompletedStatus=${completedStatus}`
    );
  }
};
