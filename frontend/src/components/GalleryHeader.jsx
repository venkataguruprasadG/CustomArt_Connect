import "./GalleryHeader.css";

function GalleryHeader({ activeCategory, setActiveCategory }) {
    const categories = ["All", "Painting", "Sculpture", "Photography", "Digital Art"];

    return (
        <section className="gallery-header">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                >
                    {cat}
                </button>
            ))}
        </section>
    );
}

export default GalleryHeader;