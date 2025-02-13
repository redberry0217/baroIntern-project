import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Spacer from "../components/ui/Spacer";
import { useState } from "react";
import { useLogin } from "../hooks/mutations";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /** hooks */
  const { mutate: login } = useLogin();

  /** functions */
  // 로그인 처리
  const handleLogin = () => {
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    login(
      { id, password },
      {
        onSuccess: () => {
          alert("로그인 되었습니다. 환영합니다!");
          navigate("/");
        },
        onError: () => {
          alert("로그인에 실패했습니다. 다시 시도하세요.");
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center justify-center">
        <Spacer height={150} />
        <h3 className="text-2xl font-bold text-center">로그인</h3>
        <Spacer height={30} />
        {/* 로그인 폼 */}
        <div className="flex flex-col gap-5 items-center justify-center w-[400px]">
          <Input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" onClick={handleLogin}>
            로그인
          </Button>
        </div>
        <Spacer height={40} />
        {/* 회원가입 링크 */}
        <Link to="/signup" className="underline">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
