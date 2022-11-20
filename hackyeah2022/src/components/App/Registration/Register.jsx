import React from "react";
import './Register.css'
import { Footer } from "../Footer/Footer";
import logo from '../../../assets/recycler.png'
import {Link} from "react-router-dom";


export const Register = () => {


    return (
        <>
            <div className="registerPage">
                <div id="registerContainer">
                    <img src={logo}/>
                    <h1 className="register-heading">Register as:</h1>
                    <Link to="/register/user"><button className="register-button">Common user</button></Link>
                    <br/>
                    <Link to="/register/organization"><button className="register-button">Organization</button></Link>
                    
                </div>
                <div className={"registerText"}>
                    <h4>Already have an account?<Link to="/login"><h5>Log in here!</h5></Link></h4>
                </div>
            </div>

            <Footer/>
        </>
    )
}