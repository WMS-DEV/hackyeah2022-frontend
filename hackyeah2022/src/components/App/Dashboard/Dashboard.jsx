import React from 'react';
import {useAuth} from '../../Authentication/AuthProvider'
import logo from './../../../assets/recycler.png'
import './Dashboard.css'

export default function Dashboard() {


    const {token} = useAuth();

    return (

        <>

            <div className="dashboard-page">
                <div style={{"background-image": `url("${logo}")`}} className="logoWrapper">

                </div>
                <div clssName="search-wrapper">
                    <span className="material-symbols-outlined">search</span>
                    <input type="search" placeholder="Search"/>
                </div>
            </div>
        </>

    );
}