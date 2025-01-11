import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXTAUTH_URL,

  headers: { "Content-Type": "appliction/json" },
});

export default api;
