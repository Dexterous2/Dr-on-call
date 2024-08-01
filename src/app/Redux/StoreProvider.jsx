"use client"
import React, { useState, useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import axios from "axios";

function StoreProvider({ children }) {
    const [isWindowLoaded, setIsWindowLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof history !== 'undefined') {
            setIsWindowLoaded(true);
        }
    }, []);


    const [user, setUser] = useState(null);
    console.log(user)
    const getUser = async () => {
        try {
            const url = `http://localhost:5000/auth/login/success`;
            const { data } = await axios.get(url, { withCredentials: true });
            setUser(data.user._json);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            {
                isWindowLoaded ?
                    children : null
            }
        </div>
    );
}

export default StoreProvider;
