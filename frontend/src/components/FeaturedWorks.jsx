import React from "react";
import "./FeaturedWorks.css";

function FeaturedWorks(props) {
    return (
        <div className="featured-work-card">

            <img
                src={props.image}
                alt={props.alt}
            />

            <div className="featured-work-content">
                <h3>{props.title}</h3>
                <p>{props.author}</p>
                <p>${props.price}</p>
                <button>Add to Cart - ${props.price}</button>
            </div>
        </div>
    );
}

export default FeaturedWorks;