import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
            <h2>Career Fair</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="statistics">Statics</Link>
                <Link to="appliedjobs">Applied Jobs</Link>
                <Link to="blog">Blog</Link>
            </nav>
            <Link to="appliedjobs"><button>Start Apply</button></Link>

        </header>
  );
};

export default Header;
