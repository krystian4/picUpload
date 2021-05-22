import React, { useState } from 'react'

export default function DropdownMenu() {
    const [user, setUser] = useState(undefined);

    function DropdownItem(props) {
        return (
            <a href="#" className="dropdown-item">
                {props.children}
            </a>
        );
    }

    return (
        <div className="dropdown">
            {user ? <React.Fragment>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>My Uploads</DropdownItem>
            </React.Fragment> :
                <React.Fragment>
                    <DropdownItem>Sign In</DropdownItem>
                    <DropdownItem>Register</DropdownItem>
                </React.Fragment>
            }

        </div>
    );
}
