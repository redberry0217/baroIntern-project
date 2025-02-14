import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Header = () => {
  const isLoggedIn = localStorage.getItem("accessToken") !== null;
  const navigate = useNavigate();

  /** functions */
  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <div className="h-20 border-b border-gray-300 flex gap-10 items-center justify-center bg-blue-100">
      <div className="w-[1000px] flex items-center">
        <span className="w-1/3 text-blue-500 font-bold text-xl">
          💙바로인턴 박지영
        </span>
        <Link to="/" className="w-1/3 text-center">
          <strong>메인페이지</strong>
        </Link>
        {isLoggedIn ? (
          <div className="w-1/3 flex gap-6 justify-end">
            <Button
              onClick={() => navigate("/mypage")}
              color="default"
              width="w-[120px]"
            >
              <strong>마이페이지</strong>
            </Button>
            <Button onClick={handleLogout} color="primary" width="w-[120px]">
              <strong>로그아웃</strong>
            </Button>
          </div>
        ) : (
          <div className="w-1/3 flex justify-end">
            <Button
              onClick={() => navigate("/login")}
              color="default"
              width="w-[120px]"
            >
              <strong>로그인</strong>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
