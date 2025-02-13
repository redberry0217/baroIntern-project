import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Spacer from "../components/ui/Spacer";
import { useState } from "react";
import { useSignIn } from "../hooks/mutations";

const SignIn = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  /** hooks */
  const { mutate: signIn } = useSignIn();

  /** functions */
  // 회원가입 처리
  const handleSignIn = () => {
    if (!id || !nickname || !password || !passwordConfirm) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 회원가입 처리
    signIn({ id, nickname, password });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center justify-center">
        <Spacer height={100} />
        <h3 className="text-2xl font-bold text-center">회원가입</h3>
        <Spacer height={30} />
        {/* 회원가입 폼 */}
        <div className="flex flex-col gap-5 items-center justify-center w-[400px]">
          <Input
            type="text"
            label="아이디"
            value={id}
            isRequired
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            type="text"
            label="닉네임"
            value={nickname}
            isRequired
            onChange={(e) => setNickname(e.target.value)}
          />
          <Input
            type="password"
            label="비밀번호"
            value={password}
            isRequired
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="비밀번호 확인"
            value={passwordConfirm}
            isRequired
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <Spacer height={40} />
        {/* 버튼 */}
        <div className="flex gap-5 w-[400px]">
          <Button type="submit" color="default" onClick={() => navigate("/")}>
            취소
          </Button>
          <Button type="submit" color="primary" onClick={handleSignIn}>
            가입완료
          </Button>
        </div>
        <Spacer height={40} />
        {/* 로그인 링크 */}
        <Link to="/login" className="underline">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
