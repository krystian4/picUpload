import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/users/signin', {username, password})
            .then(response=> {
                console.log(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
            });
      };

    return (
        <div className="form-window">
            <div className="signin-panel">
                <form className="form" onSubmit={submitHandler}>
                    <h1>Sign In</h1>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username..."
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password..."
                            required
                            onChange={(e) => setPassword(e.target.value)}
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
                <Link to="/signup"><button className="submit-button signup-button">Sign Up</button></Link>
            </div>
        </div>

    )
}
