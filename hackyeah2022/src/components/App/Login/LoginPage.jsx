import React, {useState} from 'react';
import './LoginPage.css';
import PropTypes from 'prop-types';
import twig from "../../../assets/twig.jpg";
import {useAuth} from "../../Authentication/AuthProvider";




export default function LoginPage({setToken}) {

    const { apiLink, onLogin, onUsernameChange, onPasswordChange} = useAuth();

    const twig = require("../../../assets/twig.jpg");

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
                        <button onClick={onLogin}>Submit</button>
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