import React, {useState} from 'react';
import './LoginPage.css';
import PropTypes from 'prop-types';
import twig from "../../../assets/twig.jpg";
import {useAuth} from "../../Authentication/AuthProvider";

export default function LoginPage({setToken}) {

    const { apiLink, onLogin, onUsernameChange, onPasswordChange, loadingLogin, setLoadingLogin} = useAuth();

    const twig = require("../../../assets/twig.jpg");

    const [ buttonLoading, setButtonLoading] = useState(false)

    return (
        <>
            <img className="twig" src={twig} alt="Twig"/>
            <div className="login-box-container">
                <div className='login-box'>
                <h1>Log In</h1>
                <div>
                    <label>Username</label>
                    <br/>
                    <input type="text" onChange={onUsernameChange}/>
                    <br/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input type="password" onChange={onPasswordChange}/>
                    <br/>
                    <div>
                        <button onClick={onLogin} className={ loadingLogin ? "button-loading" : "button-notloading"}><i
                            className="fa fa-spinner fa-spin"></i>Submit</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="login-box-container">
                <div id="login-box">
                    <h1 className="register-heading">Register as</h1>
                    <br/>
                    <button className="register-button">Common user</button>   
                    <br/> 
                    <button className="register-button">Charity</button>
                    <br/>
                    <button className="register-button">Recycling company</button>
                </div>
            </div>
        </>
    )
}