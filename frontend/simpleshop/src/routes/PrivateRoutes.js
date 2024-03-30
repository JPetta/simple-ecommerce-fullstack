// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Private = ({ children }) => {
    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />; // Use replace for cleaner navigation history
    }

    return children ? children : <Outlet />; // Render children or nested routes
};

export default Private;
