import React from "react";
import Login from "../page/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes