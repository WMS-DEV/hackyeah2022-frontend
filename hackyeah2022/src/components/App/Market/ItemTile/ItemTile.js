import React from 'react';
import { useAuth } from '../../../Authentication/AuthProvider';
import { Link } from 'react';

export const ItemTile = (props) => {

    debugger;

    const { token } = useAuth();

    return(
        <div className="tile">
            <p id="title"><Link to={`market/item/${props.id}`}>{props.data.title}</Link></p>
            <img id="photo" src={props.data.auctionPictureLink}/>
            <p id="location">{props.data.location}</p>
            <p id="description">{props.data.description}</p>
        </div>  
    );
}