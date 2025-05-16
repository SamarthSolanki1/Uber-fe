import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptainProtectedWrraper({ children }) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain,setCaptain} = React.useContext(CaptainDataContext);
    const [isLoading,setIsloading] = useContext(true);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);
    //remaining as It will be done later 
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/login`)
    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }

    return token ? <>{children}</> : null;
}

export default CaptainProtectedWrraper;
