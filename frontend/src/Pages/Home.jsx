import HeroSection from "../components/HeroSection";
import ArtistCard from "../components/ArtistCard";
import FeaturedWorks from "../components/FeaturedWorks";
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

    const works = [
        {
            id: 1,
            title: "Sunset Bliss",
            author: "Rahul Sharma",
            price: "$500",
            image: "https://picsum.photos/300?4",
            alt: "Sunset bliss"
        },
        {
            id: 2,
            title: "Portrait of a Lady",
            author: "Priya Reddy",
            price: "$750",
            image: "https://picsum.photos/300?5",
            alt: "Portrait of a lady"
        },
        {
            id: 3,
            title: "Starry Night",
            author: "Arjun Kumar",
            price: "600",
            image: "https://picsum.photos/300?6",
            alt: "Starrt night"
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

            <section className="featured-works">
                <h2>RECENTLY ADDED MASTERPIECES</h2>

                <div className="works-container">

                    {works.map((work) => (
                        <FeaturedWorks
                            key={work.id}
                            title={work.title}
                            author={work.author}
                            price={work.price}
                            image={work.image}
                            alt={work.alt}
                        />
                    ))}

                </div>
            </section>
        </>
    );
}

export default Home;