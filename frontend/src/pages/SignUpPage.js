import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
    return (
        <div className="form-window">
            <div className="signup-panel">
                <form className="form">
                    <h1>Sign In</h1>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username..."
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email..."
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password..."
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="rpassword">Confirm Password</label>
                        <input
                            type="password"
                            id="rpassword"
                            placeholder="Repeat password..."
                            required
                        ></input>
                    </div>
                    <div>
                        <label />
                        <button className="submit-button" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <div className="signin-joinus-panel">
                <h2>Do you have an account?</h2>
                <p>Go to login page and have fun!</p>
                <Link to="/signin"><button className="submit-button signup-button">Sign In</button></Link>
            </div>
        </div>
    )
}
