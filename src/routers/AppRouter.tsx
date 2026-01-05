import { Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}