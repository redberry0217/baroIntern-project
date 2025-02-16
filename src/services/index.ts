import axios from "axios";
import { baseInstance } from "../axios/baseInstance";
import { EditProfileRequest, LoginRequest, RegisterRequest } from "../types";

// 테스트 - jsonplaceholder 조회
export const getJsonPlaceholder = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return response.data;
};

/** 회원가입 */
export const register = async (data: RegisterRequest) => {
  const response = await baseInstance.post("/register", data);
  return response.data;
};

/** 로그인 */
export const login = async (data: LoginRequest) => {
  const response = await baseInstance.post(`/login?expiresIn=10m`, data);
  return response.data;
};

/** 프로필 조회 */
export const getProfile = async () => {
  const response = await baseInstance.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

/** 프로필 수정 */
export const editProfile = async (data: EditProfileRequest) => {
  const response = await baseInstance.patch("/profile", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};
