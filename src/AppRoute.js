import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './Layout/MainLayout';

const AppRoute = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoute;
