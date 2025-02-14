import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
      setIsUserLoading(false);
    } else {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/login");
    }
  }, [navigate]);

  return { isUserLoading, isLoggedIn };
};

export default useAuthRedirect;
