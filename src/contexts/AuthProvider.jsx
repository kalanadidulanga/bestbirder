// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '@/constants';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('userData') && Cookies.get('auth_token') ? JSON.parse(localStorage.getItem('userData')) : null);
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = Cookies.get('auth_token');
        // const userId = Cookies.get('user_id');
        const userId = user ? user.id : null;
        if (authToken) {
            // Fetch user details using the token or from a stored user state
            const handleAuth = async () => {
                try {
                    const response = await axios.post(`${BACKEND_URL}/check-auth.php`, {
                        user_id: userId,
                        auth_token: authToken,
                    });

                    if (response.data.success) {
                        // toast.success(response.data.message || 'Authentication successful');

                        const userData = response.data.user;
                        setUser(userData);
                        Cookies.set('auth_token', userData.token, { expires: 1 });
                        Cookies.set('user_id', userData.id, { expires: 1 });
                        localStorage.setItem('userData', JSON.stringify(userData));
                        // if (userData.user_type_id === "2") {
                        // navigate('/dashboard');
                        // }

                        // if (userData.user_type_id === "1") {
                        //     navigate('/');
                        // }
                    } else {
                        // toast.error(response.data.message || 'Authentication failed');
                        console.log(response.data.message);
                        // handle error
                        setUser(null);
                        Cookies.remove('auth_token');
                        Cookies.remove('user_id');
                        localStorage.clear();
                    }
                } catch (error) {
                    console.error('There was an error!', error);
                    setUser(null);
                    Cookies.remove('auth_token');
                    Cookies.remove('user_id');
                    localStorage.clear();
                }
            };

            handleAuth();
        } else {
            setUser(null);
            Cookies.remove('auth_token');
            Cookies.remove('user_id');
            localStorage.clear();
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        Cookies.set('auth_token', userData.token, { expires: 1 });
        Cookies.set('user_id', userData.id, { expires: 1 });
        localStorage.setItem('userData', JSON.stringify(userData));
        // if (userData.user_type_id === "2") {
        navigate('/admin');
        // } else if (userData.user_type_id === "1") {
        // navigate('/');
        // }
    };

    const logout = () => {
        setUser(null);
        Cookies.remove('auth_token');
        Cookies.remove('user_id');
        localStorage.clear();
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
