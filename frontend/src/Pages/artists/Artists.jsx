import "./Artists.css";
import ArtistCard from "../../components/ArtistCard";

function Artists() {
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
    return (
        <>
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
        </>
    );
}

export default Artists;