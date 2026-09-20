import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;