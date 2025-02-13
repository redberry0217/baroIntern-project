import { baseInstance } from "../axios/baseInstance";

// 테스트 - jsonplaceholder 조회
export const getJsonPlaceholder = async () => {
  const response = await baseInstance.get("/todos/1");
  return response.data;
};
