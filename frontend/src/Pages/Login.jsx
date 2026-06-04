import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="login-container">

            <h1 className="login-title">
                Login
            </h1>

            <form onSubmit={handleSubmit}>

                <input
                    className="login-input"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="login-button"
                    type="submit"
                >
                    Login
                </button>

                <p>
                    Don't have an account yet? <Link to="/register">Register</Link>
                </p>

            </form>

        </div>
    );
}

export default Login;