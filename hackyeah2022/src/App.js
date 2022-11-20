import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Dashboard from "./components/App/Dashboard/Dashboard";
import Preferences from "./components/App/Preferences/Preferences";
import LoginPage from "./components/App/Login/LoginPage";
import {Auction} from "./components/App/Auction/Auction";
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/App/Home/Home"
import {User} from "./components/App/User/User"
import useToken from "./useToken";
import {useEffect, useState, createContext} from "react";
import {Navigation} from "./components/Navigation/Navigation"
import AuthProvider from "./components/Authentication/AuthProvider";
import {ProtectedRoute} from "./components/Authentication/ProtectedRoute";
import { CharityRegistration } from './components/App/Registration/CharityRegistration';

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="loginpage" element={<LoginPage/>}/>
                <Route path="/user/*" element={<ProtectedRoute><User /></ProtectedRoute>}>
                    <Route path="auction" element={<Auction/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="navigation" element={<Navigation/>}/>
                    <Route path="charity-registration" element={<CharityRegistration/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="preferences" element={
                        <ProtectedRoute>
                            <Preferences/>
                        </ProtectedRoute>
                    }/>
                </Route>
                    <Route path="*" element={<NotFound/>}/>
            </Routes>
        </AuthProvider>
    );
};

export default App;
