import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.0.133:8000",
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