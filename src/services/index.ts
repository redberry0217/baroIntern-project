import { baseInstance } from "../axios/baseInstance";
import { LoginRequest, RegisterRequest } from "../types";

// 테스트 - jsonplaceholder 조회
export const getJsonPlaceholder = async () => {
  const response = await baseInstance.get("/todos/1");
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
