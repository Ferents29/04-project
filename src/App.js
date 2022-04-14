import React from 'react'

import {
    BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/UI/Navbar/Navbar";
import AppRouter from "./component/AppRouter";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}
