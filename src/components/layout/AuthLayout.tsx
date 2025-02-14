import { Outlet } from "react-router-dom";
import Header from "../Header";
// import useAuthRedirect from "../../hooks/useRedirect";

const AuthLayout = () => {
  // const { isUserLoading } = useAuthRedirect();

  // if (isUserLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthLayout;
