import { useMutation } from "@tanstack/react-query";
import { login, register } from "../../services";
import { useNavigate } from "react-router-dom";

/** 회원가입 */
export const useSignIn = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert("회원가입이 완료되었습니다. 로그인 해보세요!");
      navigate("/login");
    },
    onError: () => {
      alert("회원가입에 실패했습니다. 다시 시도하세요.");
    },
  });
};

/** 로그인 */
export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      alert("로그인 되었습니다. 환영합니다!");
      navigate("/");
    },
    onError: () => {
      alert("로그인에 실패했습니다. 다시 시도하세요.");
    },
  });
};
