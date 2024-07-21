// Configuração do Contexto de Autenticação

import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const { data } = await axios.get('/api/auth/me', {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    setUser(data);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        loadUser();
    }, []);

    const login = async (email, password) => {
        const { data } = await axios.post('/api/auth/login', { email, password });
        localStorage.setItem('token', data.token);
        setUser(data.user);
        history.push('/');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        history.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
