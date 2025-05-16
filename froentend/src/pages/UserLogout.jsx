import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserLogout() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login'); // Redirect if no token is found
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
        .catch((error) => {
            console.error("Logout failed", error);
        });
    }, []); // Run only once when component mounts

    return <div>Logging out...</div>; 
}

export default UserLogout;
