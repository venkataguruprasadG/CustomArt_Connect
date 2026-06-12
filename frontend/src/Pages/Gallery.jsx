import { useState } from "react";
import GalleryHeader from "../components/GalleryHeader";
import "./Gallery.css";

function Gallery() {
    const [sortOption, setSortOption] = useState("");

    const artworks = [
        {
            id: 1,
            title: "Ethereal Sunrise",
            artist: "John Doe",
            price: 750,
            image: "https://picsum.photos/300/200?random=1"
        },
        {
            id: 2,
            title: "Serenity in Stone",
            artist: "Jane Smith",
            price: 200,
            image: "https://picsum.photos/300/200?random=2"
        }
    ];

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };
    return (
        <>
            <div className="gallery-page">
                <GalleryHeader />

                <div className="gallery-toolbar">

                    <div className="sort-section">
                        <label>Sort By</label>

                        <select
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="">Newest</option>
                            <option value="price-asc">
                                Price: Low to High
                            </option>
                            <option value="price-desc">
                                Price: High to Low
                            </option>
                        </select>
                    </div>
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Search artwork..."
                        />
                    </div>

                </div>

                <div className="gallery-grid">
                    {artworks.map((art) => {
                        return (
                            <div className="gallery-item">
                                <img src={art.image}
                                    alt={art.title} />

                                <h4>{art.title}</h4>

                                <p>{art.artist}</p>

                                <p>${art.price}</p>

                                <button className="view-details-btn">
                                    View Details
                                </button>

                                <button className="add-to-cart-btn">
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Gallery;