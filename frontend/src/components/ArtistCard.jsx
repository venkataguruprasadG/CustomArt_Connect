import React from "react";
import "./ArtistCard.css";

function ArtistCard(props) {
    return (
        <div className="artist-card">
            <img
                src={props.image}
                alt={props.name}
            />

            <h3>{props.name}</h3>

            <p>{props.description}</p>

            <button>View Profile</button>
        </div>
    );
}

export default ArtistCard;