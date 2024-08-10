import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ requiredRole }) => {
    const token = localStorage.getItem('token');
    
    // Simulate decoding JWT to get user role
    const userRole = token ? JSON.parse(atob(token.split('.')[1])).user.role : null;

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (requiredRole && userRole !== requiredRole) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
