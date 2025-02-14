import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile, login, register } from "../../services";
import { COMMON_QUERY_KEYS } from "../../constants/queryKeys";

/** 회원가입 */
export const useSignIn = () => {
  return useMutation({
    mutationFn: register,
  });
};

/** 로그인 */
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMON_QUERY_KEYS.USER });
    },
  });
};

/** 프로필 수정 */
export const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMON_QUERY_KEYS.PROFILE });
    },
  });
};
