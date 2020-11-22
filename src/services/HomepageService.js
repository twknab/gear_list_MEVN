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
  sendContactForm(contactFormData) {
    return api.post("/contact", contactFormData);
  }
};
