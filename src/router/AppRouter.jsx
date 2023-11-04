import { Route, Routes } from "react-router-dom"
import { Ratios } from "../components/Ratios"
import { LoginPage } from "../components/LoginPage"
import { About } from "../components/About"
import { ProtectedRoute } from "./ProtectedRoute"
import { Balance } from "../components/Balance"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/ratio" element={
          <ProtectedRoute>
            <Ratios/>
          </ProtectedRoute>
        } />
        <Route path="/balance" element={<Balance/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  )
}
