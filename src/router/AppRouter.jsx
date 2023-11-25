import { Route, Routes } from "react-router-dom";
import { Ratios } from "../components/Ratios";
import { LoginPage } from "../components/LoginPage";
import { About } from "../components/About";
import { ProtectedRoute } from "./ProtectedRoute";
import { Balance } from "../components/Balance";
import { ResetPassword } from "../components/ResetPassword";
import { RegisterPage } from "../components/RegisterPage";
import Pruebacida from "../components/Ratios/Pruebacida";
import MargenBruto from "../components/Ratios/margenbrutoutilidad";
import MargenBrutoN from "../components/Ratios/margenbrutoneto";
import RentabCap from "../components/Ratios/rentabcapital";
import RotacInv from "../components/Ratios/rotacioninven";

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
        path="/ratio/pruebac"
        element={
          <ProtectedRoute>
            <Pruebacida />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ratio/margenbruto"
        element={
          <ProtectedRoute>
            <MargenBruto />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ratio/margenbrutoN"
        element={
          <ProtectedRoute>
            <MargenBrutoN />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ratio/rentabCap"
        element={
          <ProtectedRoute>
            <RentabCap />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ratio/rotacionInv"
        element={
          <ProtectedRoute>
            <RotacInv />
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
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
};
