import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    console.log(props)
    return (
        <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
            <div className="container">
                <div className="topbar-left">
                    <button className="topbar-toggler">☰</button>
                    <Link className="topbar-brand" to="/">
                        <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
                        <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt="logo" />
                    </Link>
                </div>
                <div className="topbar-right">
                    <ul className="topbar-nav nav">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/articles/create">Write new article</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hey {props.authUser && props.authUser.name}
                                <i className="fa fa-caret-down" />
                            </a>
                            <div className="nav-submenu">
                                <Link className="nav-link" to="/login">My articles</Link>
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </div>
                        </li>
                        {
                            !props.authUser && <li className="nav-item">
                                <Link className="nav-link" to="/login">LOGIN</Link>
                            </li>
                        }
                        {
                            !props.authUser && <li className="nav-item">
                                <a className="nav-link" href="register.html">Signup</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar