import HeroSection from "../components/HeroSection";
import ArtistCard from "../components/ArtistCard";
import "./Home.css";

function Home() {
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
        }
    ];
    return (
        <>
            <HeroSection />

            <section className="featured-artists">

                <h2>FEATURED ARTISTS</h2>

                <div className="artist-container">

                    {artists.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            name={artist.name}
                            specialization={artist.specialization}
                            image={artist.image}
                        />
                    ))}

                </div>

            </section>
        </>
    );
}

export default Home;