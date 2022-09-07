import React from "react";
import pin from "../images/travel-location.png";

export default function Entry(props) {
    return (
        <div className="entry">
            <img src={props.imageUrl} alt="" className="entry--img"/>
            <div className="entry--info">
                <img src={pin} className="entry--logo"/>
                <p className="entry--location">{props.location}</p>
                <a className="entry--link" href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
            <div className="entry--main">
                <p className="entry--title">{props.title}</p>
                <p className="entry--date">{props.startDate} - {props.endDate}</p>
                <p className="entry--description">{props.description}</p>
            </div>                    
        </div>       
    )  
}
