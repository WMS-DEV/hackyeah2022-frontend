import "./AuctionCard.css"
import {Link} from 'react-router-dom'

export const AuctionCard = (props) => {

    return (
        <>
            <div className="movie" key={props.auction.id}>
                <Link to={`/user/market/item/id=${props.auction.id}`}>
                    <div>
                        <p>{props.auction.category}</p>
                    </div>
                    {console.log(props.auction.auctionPictureLink)}
                    <div>
                        <img src={props.auction.auctionPictureLink}/>
                    </div>

                    <div>
                        <h3>{props.auction.title}</h3>
                        <h2>{props.auction.location}</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}