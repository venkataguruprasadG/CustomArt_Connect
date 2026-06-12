import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import HeroSection from "./components/HeroSection";
import Artists from "./Pages/artists/Artists";
import Footer from "./components/Footer";
import Gallery from "./Pages/Gallery";

function App() {
  return (

    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar /> {/* this is the specific way of adding the navbar only to the home page. */}

            <Home />

            <Footer />

          </>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/artists"
        element={<> <Navbar /> <Artists /> </>}
      />

      <Route
        path="/gallery"
        element={
          <>
            <Navbar />
            <Gallery />
          </>
        }
      />
    </Routes>
  );
}

export default App;