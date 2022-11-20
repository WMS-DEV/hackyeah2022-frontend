import React from 'react';
import {Link} from "react-router-dom";

export const Item = (props) => {
    return(
        <div className={props.isNew == 1 ? "offer tile new" : "offer tile"}>
            <p id="offer_name"><Link to={`offer_details/user_id=${props.id}`}>{props.name}</Link></p>
            <div id="offer_photos"></div>
            {props.isNew == 1 && <p id="offer_new">new!</p>}
            <p id="offer_location">{props.location}</p>
            {props.maximumStake ? <p id="offer_stake"><span>do</span><br/>{ + props.maximumStake + 'zł/h'}</p> : <p id="offer_stake">{'do' + props.maximumStake + 'zł/dzień'}</p>}
        </div>    
    );
};