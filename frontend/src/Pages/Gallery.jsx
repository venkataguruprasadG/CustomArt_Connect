import { useState } from "react";
import GalleryHeader from "../components/GalleryHeader";
import "./Gallery.css";

function Gallery() {
    const [sortOption, setSortOption] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const artworks = [
        {
            id: 1,
            title: "Ethereal Sunrise",
            artist: "John Doe",
            price: 750,
            category: "Painting",
            image: "https://picsum.photos/400/500?random=1" // Made taller for a sleek look
        },
        {
            id: 2,
            title: "Serenity in Stone",
            artist: "Jane Smith",
            price: 200,
            category: "Sculpture",
            image: "https://picsum.photos/400/400?random=2"
        },
        {
            id: 3,
            title: "Macro Flora",
            artist: "Alex Green",
            price: 300,
            category: "Photography",
            image: "https://picsum.photos/400/600?random=3"
        }
    ];

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const sortedArtworks = [...artworks].sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        return 0;
    });

    const filteredArtworks = sortedArtworks.filter((art) => {
        const matchesCategory = activeCategory === "All" || art.category === activeCategory;
        const matchesSearch = art.title.toLowerCase().includes(searchTerm) || art.artist.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="gallery-page">
            {/* Toolbar Area */}
            <div className="gallery-toolbar">
                <GalleryHeader activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                <div className="toolbar-controls">
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Search artwork or artist..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="sort-section">
                        <label htmlFor="sort-select">Sort By</label>
                        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
                            <option value="">Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Premium Art Grid */}
            <div className="gallery-grid">
                {filteredArtworks.map((art) => (
                    <div key={art.id} className="gallery-card">
                        <div className="card-image-wrapper">
                            <img src={art.image} alt={art.title} />
                            <span className="card-category-tag">{art.category}</span>
                        </div>
                        <div className="card-content">
                            <div className="card-meta">
                                <h4 className="art-title">{art.title}</h4>
                                <p className="artist-name">by {art.artist}</p>
                            </div>
                            <div className="card-price-row">
                                <span className="art-price">${art.price}</span>
                            </div>
                            <div className="card-actions">
                                <button className="view-details-btn">View Info</button>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredArtworks.length === 0 && (
                <div className="no-results">No artworks found matching your criteria.</div>
            )}
        </div>
    );
}

export default Gallery;