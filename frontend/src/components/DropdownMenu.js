import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function DropdownMenu() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    function DropdownItem(props) {
        return (
            <Link to={props.url} className="dropdown-item">
                {props.children}
            </Link>
        );
    }

    return (
        <div className="dropdown">
            {user ? <React.Fragment>
                <DropdownItem url="#">My Profile</DropdownItem>
                <DropdownItem url="#">My Uploads</DropdownItem>
            </React.Fragment> :
                <React.Fragment>
                    <DropdownItem url="/signin">Sign In</DropdownItem>
                    <DropdownItem url="/signup">Register</DropdownItem>
                </React.Fragment>
            }

        </div>
    );
}
