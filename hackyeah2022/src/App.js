import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Dashboard from "./components/App/Dashboard/Dashboard";
import Preferences from "./components/App/Preferences/Preferences";
import LoginPage from "./components/App/Login/LoginPage";
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/App/Home/Home"
import useToken from "./useToken";
import {useEffect, useState, createContext} from "react";
import Navigation from "./components/Navigation/Navigation"
import AuthProvider from "./components/Authentication/AuthProvider";
import {ProtectedRoute} from "./components/Authentication/ProtectedRoute";
import { CharityRegistration } from './components/App/Registration/CharityRegistration';

const App = () => {
    return (
        <AuthProvider>
            <h1>React Router</h1>

            <Navigation/>

            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="navigation" element={<Navigation/>}/>
                <Route path="charity-registration" element={<CharityRegistration/>}/>
                <Route path="dashboard" element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                }/>
                <Route path="preferences" element={
                    <ProtectedRoute>
                        <Preferences/>
                    </ProtectedRoute>
                }/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </AuthProvider>
    );
};

export default App;
