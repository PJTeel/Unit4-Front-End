import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <ul>
                <h1>PJ Teel</h1>
                <li><Link to='/AboutMe'>
                    <a>About Me</a>
                </Link>
                </li>
                <li><Link to='/'>
                    <a>Home</a>
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;