
import { AuthContext } from '@/contexts/AuthProvider ';
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { user } = useContext(AuthContext);

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
