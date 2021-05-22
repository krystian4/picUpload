import React from 'react'
import NavItem from './NavItem'
import {ReactComponent as UserIcon} from "../icons/user.svg";
import {ReactComponent as HomeIcon} from "../icons/home.svg";
import {ReactComponent as UploadIcon} from "../icons/upload.svg";
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <h1 className="logo"><Link to="/">picUpload</Link></h1>
            <ul className="navbar-nav">
                <NavItem icon={<HomeIcon />} url="/"/>
                <NavItem icon={<UploadIcon />} url="/upload"/>
                <NavItem icon={<UserIcon />} url="#">
                    <DropdownMenu />
                </NavItem>
            </ul>
        </nav>
    )
}
