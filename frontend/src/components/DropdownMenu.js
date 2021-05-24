import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function DropdownMenu(props) {
    const [user, setUser] = useState(undefined);
    //const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    function DropdownItem(props) {
        return (
            <Link to={props.url} onClick={props.onClick} className="dropdown-item">
                {props.children}
            </Link>
        );
    }

    function logOut(){
        localStorage.removeItem('user');
    }

    return (
        <React.Fragment>
            {props.open && <div className="dropdown" onClick={()=>{props.setOpen(false)}}>
            
            {user ? <React.Fragment>
                <DropdownItem url="#">My Profile</DropdownItem>
                <DropdownItem url="#">My Uploads</DropdownItem>
                <DropdownItem url="/signin" onClick={logOut}>LogOut</DropdownItem>
            </React.Fragment> :
                <React.Fragment>
                    <DropdownItem url="/signin">Sign In</DropdownItem>
                    <DropdownItem url="/signup">Register</DropdownItem>
                </React.Fragment>
            }

        </div>}
        </React.Fragment>
        
    );
}
