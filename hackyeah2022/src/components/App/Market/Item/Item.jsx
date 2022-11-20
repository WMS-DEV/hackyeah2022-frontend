import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Item.css'
import {Footer} from "../../Footer/Footer";
import {useAuth} from "../../../Authentication/AuthProvider";
import '../../../../index.css'

export const Item = () => {

    const {apiLink, token} = useAuth()
    const [auctionId, setAuctionId] = useState(window.location.href.match(/id=([^&]*)/)[1]);
    const [auction, setAuction] = useState();

    useEffect(() => {
        const fetchAuction = async () => {
            const data = await fetch(`${apiLink}/auction/${auctionId}`, {headers: {'authorization': token}})
                .then(response => response.json());
            setAuction(data);
        }
        fetchAuction().catch(console.error);
        ;
    }, []);


    if (!auction) {
        return (
            <>
                <div className="loader-wrapper">
                    <div className="loader"/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="auction-details-page">
                    <div className="auction-item">
                        <div className="upper-container">
                            <div className="imgContainer"
                                 style={{"background-image": `url("${auction.auction.auctionPictureLink}")`}}>
                                {/*<img className="itemImg" src={props.auctionPictureLink}}/>*/}
                            </div>
                            <div className={"profilePart"}>
                                <div className={"avatarCoint"}>
                                    <img src={auction.seller.pictureUrl}/>
                                </div>
                                <div className={"profileOne"}>
                                    <h1>{auction.seller.firstName}</h1>
                                    <h2>{auction.seller.city}</h2>
                                    <h3>{auction.seller.postalCode}</h3>
                                </div>
                                <div className={"addToCart"}>
                                    <h5>Dodaj do koszyka</h5><span
                                    className="material-symbols-outlined">shopping_cart</span>
                                </div>
                                <div className={"buyNow"}>
                                    <h5>Napisz wiadomość</h5><span className="material-symbols-outlined">mail</span>
                                </div>
                            </div>
                        </div>
                        <h1>{auction.auction.title}</h1>
                        <h2>{auction.auction.description}</h2>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }

};