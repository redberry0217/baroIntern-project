import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 border-b border-gray-300 flex gap-10 items-center justify-center">
      <div className="w-[1400px] flex items-center justify-center bg-blue-100">
        {/* 가운데 페이지 메뉴 섹션 */}
        <section className="w-[90%] flex items-center justify-center">
          <Link to="/" className="text-center">
            메인
          </Link>
        </section>
        {/* 오른쪽 로그인 메뉴 섹션 */}
        <section className="w-[10%] flex items-center justify-center">
          <Link to="/login" className="text-right">
            로그인
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Header;
