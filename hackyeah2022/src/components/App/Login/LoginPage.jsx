import React, {useState} from 'react';
import './LoginPage.css';
import PropTypes from 'prop-types';
import twig from "../../../assets/twig.jpg";
import {useAuth} from "../../Authentication/AuthProvider";
import logo from "../../../assets/recycler.png"
import {Link} from "react-router-dom";

export default function LoginPage({setToken}) {

    const {apiLink, onLogin, onUsernameChange, onPasswordChange, loadingLogin, setLoadingLogin} = useAuth();

    const twig = require("../../../assets/twig.jpg");

    return (
        <>
            <img className="twig" src={twig} alt="Twig"/>
            <div className="login-box-container">
                <img className={"logo"} src={logo}/>
                    <div className={"loginForm"}>
                        <label>Username</label>
                        <input type="text" onChange={onUsernameChange}/>
                        <label>Password</label>
                        <input type="password" onChange={onPasswordChange}/>
                        <div>
                            <button onClick={onLogin} className={loadingLogin ? "button-loading" : "button-notloading"}>
                                <i
                                    className="fa fa-spinner fa-spin"></i>Submit
                            </button>
                        </div>
                    </div>
                    <div className={"registerText"}>
                        <h4>Don't have an account yet? <Link to="/register"><h5>Register here!</h5></Link></h4>
                    </div>
                </div>
        </>
    )
}