import "./Artists.css";
import { useNavigate } from "react-router-dom";
import ArtistCard from "../../components/ArtistCard";
import React from "react";
import ArtistBackgroundPic from "../../assets/ArtistPageImageBackground.png";
import Footer from "../../components/Footer";

function Artists() {
    const navigate = useNavigate();
    const artists = [
        {
            id: 1,
            name: "Rahul Sharma",
            specialization: "Digital Artist",
            image: "https://picsum.photos/300?1"
        },

        {
            id: 2,
            name: "Priya Reddy",
            specialization: "Portrait Artist",
            image: "https://picsum.photos/300?2"
        },

        {
            id: 3,
            name: "Arjun Kumar",
            specialization: "Sketch Artist",
            image: "https://picsum.photos/300?3"
        },
        {
            id: 4,
            name: "Sarah Jenkins",
            specialization: "Glassware Artist",
            image: "https://picsum.photos/300?1"
        },

        {
            id: 5,
            name: "Liam O'Connell",
            specialization: "Photography",
            image: "https://picsum.photos/300?2"
        },

        {
            id: 6,
            name: "Anya Sharma",
            specialization: "Digital Painter",
            image: "https://picsum.photos/300?3"
        },

        {
            id: 7,
            name: "David Chen",
            specialization: "Ceramics",
            image: "https://picsum.photos/300?4"
        }
    ];

    const featuredArtists = [
        {
            id: 1,
            name: "Mia Dubois",
            medium: "Glassware",
            image: "https://picsum.photos/200?11"
        },

        {
            id: 2,
            name: "Ben Carter",
            medium: "Photography",
            image: "https://picsum.photos/200?12"
        },

        {
            id: 3,
            name: "Anya Sharma",
            medium: "Painting",
            image: "https://picsum.photos/200?13"
        },

        {
            id: 4,
            name: "Lion Siame",
            medium: "Glassware",
            image: "https://picsum.photos/200?14"
        }
    ];

    return (
        <>
            <section className="artists"
                style={{ backgroundImage: `url(${ArtistBackgroundPic})` }}
            >
                <div className="artists-header">
                    <h1 className="artists-title">
                        MEET OUR INSPIRING CREATORS
                    </h1>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search artists by name or style..."
                        />

                        <button className="search-button">
                            Search
                        </button>
                    </div>

                    <div className="filter-section">
                        <h2 className="filter-title">
                            FILTER BY
                        </h2>

                        <select>
                            <option>Medium</option>
                        </select>

                        <select>
                            <option>Style</option>
                        </select>

                        <select>
                            <option>Price Range</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className="artist-grid">
                {artists.map(artist => (
                    <ArtistCard
                        key={artist.id}
                        name={artist.name}
                        specialization={artist.specialization}
                        image={artist.image}
                    />
                ))}
            </section>

            <section className="meet-more-artists">
                <h2>MEET MORE ARTISTS</h2>
                <p>
                    Browse our top medium artists
                </p>
                <div className="featured-artists-row">
                    {featuredArtists.map(artist => (
                        <div
                            key={artist.id}
                            className="featured-artist"
                        >
                            <img
                                src={artist.image}
                                alt={artist.name}
                            />

                            <h4>{artist.name}</h4>

                            <p>{artist.medium}</p>
                        </div>
                    ))}
                </div>

                <button
                    className="shop-now-button"
                    onClick={() => navigate("/shop")}
                >
                    Shop Now
                </button>
            </section>

            <Footer />
        </>
    );
}

export default Artists;