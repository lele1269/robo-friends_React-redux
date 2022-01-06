import React from "react";
import 'tachyons';
import './Card.css'

const Card = (props) => {
    const {id, name, email} = props
    return(
        <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 shadow-inset-center">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
        <div className="tc">
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;