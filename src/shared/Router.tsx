import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import MyPage from "../pages/MyPage";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignIn />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/myPAge" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
