import React from "react";
import "./FeaturedWorks.css";

function FeaturedWorks(props) {
    return (
        <div className="featured-works">

            <img
                src={props.image}
                alt={props.alt}
            />

            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>${props.price}</p>
            <button>Add to Cart - ${props.price}</button>
        </div>
    );
}

export default FeaturedWorks;