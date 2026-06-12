import { useState } from "react";
import GalleryHeader from "../components/GalleryHeader";
import CartSidebar from "../components/CartSidebar"; // Import new cart component
import "./Gallery.css";

function Gallery() {
    const [sortOption, setSortOption] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // 1. Core State to hold items added to the cart
    const [cart, setCart] = useState([]);

    const artworks = [
        {
            id: 1,
            title: "Ethereal Sunrise",
            artist: "John Doe",
            price: 750,
            category: "Painting",
            image: "https://picsum.photos/400/500?random=1"
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

    // 2. Add item logic
    const handleAddToCart = (artwork) => {
        setCart([...cart, artwork]);
    };

    // 3. Remove item logic by its index (allows duplicates of same item ID)
    const handleRemoveFromCart = (indexToRemove) => {
        setCart(cart.filter((_, index) => index !== indexToRemove));
    };

    // 4. Checkout handler stub
    const handleCheckout = () => {
        alert(`Proceeding to checkout with ${cart.length} unique masterpiece(s)!`);
    };

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

            {/* Split Screen Container layout */}
            <div className="gallery-main-layout">

                {/* Left Side: Premium Art Grid */}
                <div className="gallery-content-area">
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
                                        <button
                                            className="add-to-cart-btn"
                                            onClick={() => handleAddToCart(art)} // Linked button to handler
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredArtworks.length === 0 && (
                        <div className="no-results">No artworks found matching your criteria.</div>
                    )}
                </div>

                {/* Right Side: Persistent Cart Sidebar Component */}
                <CartSidebar
                    cartItems={cart}
                    onRemoveItem={handleRemoveFromCart}
                    onCheckout={handleCheckout}
                />

            </div>
        </div>
    );
}

export default Gallery;