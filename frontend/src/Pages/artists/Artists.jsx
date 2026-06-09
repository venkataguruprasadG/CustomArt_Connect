import "./Artists.css";

function Artists() {
    return (
        <section className="artists">
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
    );
}

export default Artists;