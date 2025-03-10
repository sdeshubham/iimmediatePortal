import axios from "axios";
import API_BASE_URL from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Agar authentication tokens use kar rahe ho
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
