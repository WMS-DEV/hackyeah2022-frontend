import React from "react";
import {Outlet} from "react-router-dom";
import { useAuth} from "../../Authentication/AuthProvider";
import {Navigation} from "../../Navigation/Navigation";
import {Sidebar} from "../../Sidebar";


export const User = () => {
    const { token } = useAuth();

    return (
        <div id="root_without_loginpage">
            <Navigation/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
};