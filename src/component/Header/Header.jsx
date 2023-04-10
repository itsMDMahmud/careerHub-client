import React from "react";
import "./Header.css";
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">            
            <Link className="career-header" to="/"><h1 className="career-header" >CareerFair</h1></Link>
            <nav className="head-nav">
                <NavLink className= {({isActive}) => (isActive ? 'active' : 'nav-link')} to="/">Home</NavLink>                
                <NavLink className= {({isActive}) => (isActive ? 'active' : 'nav-link')} to="appliedjobs">AppliedJobs</NavLink>
                <NavLink className= {({isActive}) => (isActive ? 'active' : 'nav-link')} to="statistics">Statistics</NavLink>
                <NavLink className= {({isActive}) => (isActive ? 'active' : 'nav-link')} to="blog">Blog</NavLink>
            </nav>
            <Link to="appliedjobs"><button className="main-btn header-btn">Start Apply</button></Link>

        </header>
  );
};

export default Header;
