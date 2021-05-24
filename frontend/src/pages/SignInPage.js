import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import LoadingIcon from '../components/LoadingIcon';

export default function SignInPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let loggedInUser = localStorage.getItem('user');
        if(loggedInUser){
            setUser(JSON.parse(loggedInUser));
        }
        setLoading(false);
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/users/signin', { username, password })
            .then(response => {
                console.log(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                props.history.push('/');
            })
            .catch(error => {
                console.log(error.response.data.message);
                setError(error.response.data.message);
            });
    };
    if(loading){
        return <LoadingIcon />
    }
    if (user) {
        return <Redirect to={"/"} />;
      } 
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
                            autoComplete="username"
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
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    {error && <div className="error-msg">{error}</div>}
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
