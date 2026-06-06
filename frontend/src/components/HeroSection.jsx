import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section className="hero">

            <div className="hero-content">
                <h1>
                    Discover Unique Artworks and connect directly with independent creators.
                </h1>
                <p>
                    Explore amazing artwork and connect with talented artists from around the world.
                </p>

                <div className="hero-buttons">
                    <button>Explore Artworks</button>
                    <button>Meet Artists</button>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;