import { useQuery } from "@tanstack/react-query";
import { TEST_KEY } from "../../constants/queryKeys";
import { getJsonPlaceholder } from "../../services";

// 테스트 - jsonplaceholder 조회
export const useReadJsonPlaceholder = () => {
  return useQuery({
    queryKey: TEST_KEY.jsonPlaceholder,
    queryFn: getJsonPlaceholder,
  });
};
