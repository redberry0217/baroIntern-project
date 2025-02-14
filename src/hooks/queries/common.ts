import { useQuery } from "@tanstack/react-query";
import { COMMON_QUERY_KEYS, TEST_KEY } from "../../constants/queryKeys";
import { getJsonPlaceholder, getProfile } from "../../services";
import { ProfileResponse } from "../../types";

// 테스트 - jsonplaceholder 조회
export const useReadJsonPlaceholder = () => {
  return useQuery({
    queryKey: TEST_KEY.jsonPlaceholder,
    queryFn: getJsonPlaceholder,
  });
};

/** 프로필 조회 */
export const useReadProfile = () => {
  return useQuery<ProfileResponse>({
    queryKey: COMMON_QUERY_KEYS.PROFILE,
    queryFn: getProfile,
  });
};
