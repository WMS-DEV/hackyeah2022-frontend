import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Dashboard from "./components/App/Dashboard/Dashboard";
import Preferences from "./components/App/Preferences/Preferences";
import LoginPage from "./components/App/Login/LoginPage";
import {Market} from "./components/App/Market/Market";
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/App/Home/Home"
import {User} from "./components/App/User/User"
import useToken from "./useToken";
import {useEffect, useState, createContext} from "react";
import {Navigation} from "./components/Navigation/Navigation"
import AuthProvider from "./components/Authentication/AuthProvider";
import {ProtectedRoute} from "./components/Authentication/ProtectedRoute";
import { CharityRegistration } from './components/App/Registration/CharityRegistration';
import { Profile } from "./components/App/Account/Profile";
import { Item } from "./components/App/Market/Item/Item";
import { UserRegistration } from './components/App/Registration/UserRegistration';
import { CreateItem } from './components/App/Auction/CreateItem/CreateItem';
import {Register} from "./components/App/Registration/Register";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="user-registration" element={<UserRegistration/>}/>
                <Route path="charity-registration" element={<CharityRegistration/>}/>
                <Route path="/user/*" element={<ProtectedRoute><User /></ProtectedRoute>}>
                    <Route path="market" element={<Market/>}/>
                    <Route path="market/*" element={<Item/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="navigation" element={<Navigation/>}/>
                    <Route path="new-item" element={<CreateItem/>}/>
                    <Route path="account" element={<Profile/>}/>
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
