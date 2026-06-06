import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import HeroSection from "./components/HeroSection";

function App() {
  return (

    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar /> {/* this is the specific way of adding the navbar only to the home page. */}

            <Home />
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

    </Routes>
  );
}

export default App;