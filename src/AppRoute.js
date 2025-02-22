import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const AppRoute = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRoute;
