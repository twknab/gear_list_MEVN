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
  createNewGearItemCategory(newGearItemCategory) {
    return api.post("/gear-item-category", newGearItemCategory);
  },
  getAllGearItemCategoriesForUser() {
    return api.get("/gear-item-category");
  },
  getItemCategory(gearItemCategoryId) {
    return api.get(
      `/gear-item-category/find-item?gearItemCategoryId=${gearItemCategoryId}`
    );
  },
  updateGearItemCategory(gearItemCategory) {
    return api.post("/gear-item-category/update", gearItemCategory);
  },
  deleteGearItemCategory(gearItemCategoryId) {
    return api.get(
      `/gear-item-category/delete?gearItemCategoryId=${gearItemCategoryId}`
    );
  }
};
