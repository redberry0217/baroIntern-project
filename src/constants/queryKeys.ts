// API 테스트 키
export const TEST_KEY = {
  jsonPlaceholder: ["jsonPlaceholder"],
};

// 일반 쿼리 키
export const COMMON_QUERY_KEYS = {
  USER: ["user"],
  PROFILE: ["profile"],
  USER_PROFILE: (userId: string) => ["userProfile", userId],
};
