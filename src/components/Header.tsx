import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 border-b border-gray-300 flex gap-10 items-center justify-center bg-blue-100">
      <div className="w-[1000px] flex items-center">
        <span className="w-1/3 text-blue-500 font-bold text-xl">
          💙바로인턴 박지영
        </span>
        <Link to="/" className="w-1/3 text-center">
          <strong>메인페이지</strong>
        </Link>
        <Link to="/login" className="w-1/3 text-right">
          <strong>로그인</strong>
        </Link>
      </div>
    </div>
  );
};

export default Header;
