import "./GalleryHeader.css"

function GalleryHeader() {
    return (
        <section className="gallery-header">
            <h2>Category</h2>
            <button className="Painting-btn">
                Painting
            </button>
            <button className="Sculpture-btn">
                Sculpture
            </button>
            <button className="Photography-btn">
                Photography
            </button>
            <button className="Digital-Art-btn">
                Digital Art
            </button>
        </section>
    );
}

export default GalleryHeader;