import React from "react";

import {Routes, Route} from "react-router-dom";

import AppLayout from "./Layout";

import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {AuthRequired} from "./components/AuthRequired";

export default function App() {
    return (
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="/" element={<AuthRequired><AppLayout/></AuthRequired>}>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<AuthRequired> <About/> </AuthRequired>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    );
}

function NoMatch() {
    return <h1>404</h1>;
}
