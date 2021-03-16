import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <ul>
                
                <h1>PJTeel Originals</h1>
                <li><Link to='/AboutMe'>
                    <h2>About Me</h2>
                </Link>
                </li>
                <li><Link to='/'>
                    <h2>Home</h2>
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;