// axios 인스턴스 관리
import axios from "axios";

export const baseInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});
