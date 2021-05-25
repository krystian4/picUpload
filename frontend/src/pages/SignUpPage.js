import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import LoadingIcon from '../components/LoadingIcon';

export default function SignUpPage(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState(false);
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
    function handlePasswordValidation(password){
        if(password.length < 6){
            console.log("Password too short!");
            setError('Password must have at least 6 characters!');
            setPasswordConfirmed(false);
            return;
        }
        setError('');
    }

    function handlePasswordConfirmation(value){
        if(password !== value){
            console.log("Password confirmation failed!");
            setError('Passwords are not the same!');
            setPasswordConfirmed(false);
            return;
        }
        setError('');
        setPasswordConfirmed(true);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!passwordConfirmed) return;

        axios.post('/api/users/signup', { username, email, password })
            .then(response => {
                console.log(response.data);
                props.history.push('/signin');
            })
            .catch(error => {
                console.log(error.response.data.message);
                setError(error.response.data.message);
            });
        console.log('submit')
    };

    if(loading){
        return <LoadingIcon />
    }
    if (user) {
        return <Redirect to={"/"} />;
      } 

    return (
        <div className="form-window">
            <div className="signup-panel">
                <form className="form" onSubmit={submitHandler}>
                    <h1>Sign Up</h1>
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
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email..."
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password..."
                            required
                            autoComplete="new-password"
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={(e) => handlePasswordValidation(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="rpassword">Confirm Password</label>
                        <input
                            type="password"
                            id="rpassword"
                            placeholder="Repeat password..."
                            required
                            autoComplete="new-password"
                            onBlur={(e) => handlePasswordConfirmation(e.target.value)}
                        ></input>
                    </div>
                    {error && <div className="error-msg">{error}</div>}
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
