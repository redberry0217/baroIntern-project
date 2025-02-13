// axios 인스턴스 관리
import axios from "axios";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
