import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
            <h2>CareerFair</h2>
            <nav className="head-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="statistics">Statics</Link>
                <Link className="nav-link" to="appliedjobs">AppliedJobs</Link>
                <Link className="nav-link" to="blog">Blog</Link>
            </nav>
            <Link to="appliedjobs"><button className="main-btn">Start Apply</button></Link>

        </header>
  );
};

export default Header;
