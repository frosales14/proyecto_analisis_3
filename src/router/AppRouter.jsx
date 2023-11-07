import { Route, Routes } from "react-router-dom";
import { Ratios } from "../components/Ratios";
import { LoginPage } from "../components/LoginPage";
import { About } from "../components/About";
import { ProtectedRoute } from "./ProtectedRoute";
import { Balance } from "../components/Balance";
import { ResetPassword } from "../components/ResetPassword";
import { RegisterPage } from "../components/RegisterPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/ratio"
        element={
          <ProtectedRoute>
            <Ratios />
          </ProtectedRoute>
        }
      />
      <Route
        path="/balance"
        element={
          <ProtectedRoute>
            <Balance />
          </ProtectedRoute>
        }
      />
      <Route path="/about" element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
};
