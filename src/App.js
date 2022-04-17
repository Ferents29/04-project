import React, {useEffect, useState} from 'react'

import {
    BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/UI/Navbar/Navbar";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./context";

export default function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setLoading(false)
    },[])
    return (
        <div>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading,
            }}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter />
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}
