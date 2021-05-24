import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function NavItem(props) {
const [open, setOpen] = useState(false);
const node = useRef();

useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };
  
  const childrenWithProps = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      open,
      setOpen,
    });
  });

    return (
        <li className="nav-item" ref={node}>
            <Link to={props.url} className="icon-button" onClick={()=>setOpen(!open)}>{props.icon}</Link>

            {open && childrenWithProps}
        </li>
    );
}
