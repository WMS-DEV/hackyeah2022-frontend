import React, {useState, useEffect} from 'react';
import {useAuth} from '../../Authentication/AuthProvider'
import logo from './../../../assets/recycler.png'
import './Dashboard.css'
import {AuctionCard} from "./AuctionCard";

export default function Dashboard() {

    const [searchTerm, setSearchTerm] = useState("");
    const [auctions, setAuctions] = useState([]);

    const {token, apiLink} = useAuth();

    useEffect(() => {
        searchAuctions("");
    }, []);

    const searchAuctions = async (query) => {
        const response = await fetch(`${apiLink}/auction/search/find?query=${query}`, {headers: {'authorization': token}});
        const data = await response.json();
        console.log(data)
        setAuctions(data);
        console.log(auctions)
    };

    return (

        <>

        <div className="dashboard-page">
            <div style={{"background-image": `url("${logo}")`}} className="logoWrapper">

            </div>
            <div clssName="search-wrapper">
                <span className="material-symbols-outlined" onClick={() => searchAuctions(searchTerm)}>search</span>
                <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                       placeholder="Search"/>
            </div>
            {auctions?.length > 0 ? (
                <div className="container">
                    {auctions.map((auction) => (
                        <AuctionCard auction={auction}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No auctions found.</h2>
                </div>
            )}
        </div>


</>

)
    ;
}