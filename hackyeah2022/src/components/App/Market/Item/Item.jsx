import React from 'react';
import {Link} from "react-router-dom";
import './Item.css'
import {Footer} from "../../Footer/Footer";

export const Item = (/*props*/) => {

    const props = {
        "auction": {
        "id": 0,
            "userId": 0,
            "buyerId": 0,
            "title": "string",
            "location": "string",
            "auctionPictureLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            "description": "string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string string ",
            "datePosted": "2022-11-20T05:17:08.287Z",
            "dateSold": "2022-11-20T05:17:08.287Z",
            "category": "AUTOMOTIVE",
            "status": "LISTED",
            "listedFor": "MARKET",
            "auctionPrice": 0,
            "selectedShippingType": "PACKAGE_MACHINE"
    },
        "seller": {
        "id": 0,
            "isAdmin": true,
            "lastName": "string",
            "username": "string",
            "phoneNumber": "string",
            "city": "string",
            "street": "string",
            "houseNumber": "string",
            "flatNumber": "string",
            "packageMachineNumber": "string",
            "postalCode": "string",
            "additionalShippingInformation": "string",
            "accountType": "REGULAR_USER",
            "firstName": "string",
            "voivodeship": "string",
            "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            "enabled": true,
            "credentialsNonExpired": true,
            "formattedAddress": "string",
            "accountNonExpired": true,
            "accountNonLocked": true
    }
    }


    return (
        <>
            <div className="auction-details-page">
                <div className="auction-item">
                    <div className="upper-container">
                        <div className="imgContainer"
                             style={{"background-image": `url("${props.auction.auctionPictureLink}")`}}>
                            {/*<img className="itemImg" src={props.auctionPictureLink}}/>*/}
                        </div>
                        <div className={"profilePart"}>
                            <div className={"avatarCoint"}>
                                <img src={props.seller.pictureUrl}/>
                            </div>
                            <div className={"profileOne"}>
                                <h1>{props.seller.firstName}</h1>
                                <h2>{props.seller.city}</h2>
                                <h3>{props.seller.postalCode}</h3>
                            </div>
                            <div className={"addToCart"}>
                                <h5>Dodaj do koszyka</h5><span className="material-symbols-outlined">shopping_cart</span>
                            </div>
                            <div className={"buyNow"}>
                                <h5>Napisz wiadomość</h5><span className="material-symbols-outlined">mail</span>
                            </div>
                        </div>
                    </div>
                    <h1>{props.auction.title}</h1>
                    <h2>{props.auction.description}</h2>
                </div>
            </div>
            <Footer/>
        </>
    );
};