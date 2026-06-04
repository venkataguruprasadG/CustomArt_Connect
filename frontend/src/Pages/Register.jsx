import { useState } from "react";
import "./Register.css";

function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Username: ", username);
        console.log("Email: ", email);
        console.log("Password: ", password);
        console.log("Confirm Password: ", confirmPassword);
    }

    return (
        <div className="register-container">

            <h1 className="register-title">
                Register
            </h1>

            <p className="register-subtitle">
                Create your account
            </p>

            <form onSubmit={handleSubmit}>

                <input
                    className="register-input"
                    type="text"
                    required
                    value={username}
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="register-input"
                    type="email"
                    required
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="register-input"
                    type="password"
                    required
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    className="register-input"
                    type="password"
                    required
                    value={confirmPassword}
                    placeholder="Confirm your password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    className="register-button"
                    type="submit"
                >
                    Register
                </button>

            </form>

        </div>
    );
}

export default Register;