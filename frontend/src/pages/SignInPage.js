import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInPage() {
    return (
        <div className="form-window">
            <div className="signin-panel">
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password..."
                            required
                        ></input>
                    </div>
                    <div>
                        <label />
                        <button className="submit-button" type="submit">
                            Sign In
          </button>
                    </div>
                </form>
            </div>
            <div className="signin-joinus-panel">
                <h2>Not registered yet?</h2>
                <p>Create new account and join to picUpload users!</p>
                <button className="submit-button signup-button"><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>

    )
}
