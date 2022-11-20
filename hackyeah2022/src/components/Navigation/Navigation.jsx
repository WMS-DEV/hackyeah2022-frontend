/*

import {NavLink} from "react-router-dom";
import {useAuth} from "../Authentication/AuthProvider";
import {Link} from "react-router-dom";

const Navigation = () => {

    const { token, onLogout } = useAuth()

    return(
        <nav>
            <Link to='/user/home'>Home</Link>
            <NavLink to="/user/dashboard">Dashboard</NavLink>
            <NavLink to="/user/preferences">Preferences</NavLink>
            <NavLink to="/user/login">LoginnnPage</NavLink>
            <NavLink to="/user/account"> ACCOUNT </NavLink>
            <NavLink to="/user/charity-registration">Charity Registration</NavLink>




            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}

        </nav>
    )
}

export default Navigation

*/

import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css";

//import NavbarProfilePart from "./Navbar/NavbarProfilePart.jsx";

export const Navigation = () => {
    const [isIconNavbar, setIsIconNavbar] = React.useState(window.innerWidth < 1000);
      
    const updateMedia = () => {
        setIsIconNavbar(window.innerWidth < 1000);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    useEffect(() => {
        if(isIconNavbar)
            document.documentElement.style.setProperty('--top-offset', '60px');
        else             
            document.documentElement.style.setProperty('--top-offset', '5vh');
    }, [isIconNavbar])

    if(!isIconNavbar){
        return(
            <nav className='mainNavbar'>
                <div className={window.location.href.match('dashboard') ? 'underline' : 'no_underline'}><Link to="/user/dashboard">Home</Link></div>
                <div className={window.location.href.match('market') ? 'underline' : 'no_underline'}><Link to="/user/market">Market</Link></div>
                <div className={window.location.href.match('my-items') ? 'underline' : 'no_underline'}><Link to="/user/my-items">My items</Link></div>
                <div className={window.location.href.match('settings') ? 'underline' : 'no_underline'}><Link to="/user/settings">Settings</Link></div>
                <div className={window.location.href.match('new-item') ? 'underline' : 'no_underline'}><Link to="/user/new-item">Add item</Link></div>

            </nav>
        )
    } else {
        return(
            <nav className="icons">
                <div className={window.location.href.match('dashboard') ? 'underline' : 'no_underline'}><Link to="/user/dashboard">Home</Link></div>
                <div className={window.location.href.match('auction') ? 'underline' : 'no_underline'}><Link to="/user/auction">Auctions</Link></div>
                <div className={window.location.href.match('my-items') ? 'underline' : 'no_underline'}><Link to="/user/my-items">My items</Link></div>
                <div className={window.location.href.match('settings') ? 'underline' : 'no_underline'}><Link to="/user/settings">Settings</Link></div>
                <div className={window.location.href.match('new-item') ? 'underline' : 'no_underline'}><Link to="/user/new-item">Add item</Link></div>
            </nav>
        )
    }   
}