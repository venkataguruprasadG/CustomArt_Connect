import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Shop() {
    return (
        <>
            <Navbar />
            <section className="shop-container">
                <img src="https://picsum.photos/400/500?random=1" />
                <div className="side-navbar">

                </div>
            </section>
            <Footer />
        </>
    );
}

export default Shop;