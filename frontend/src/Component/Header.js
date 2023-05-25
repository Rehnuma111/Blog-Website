import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <React.Fragment>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1>HotTechBlog</h1>
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              
              <li>
                <Link to="/about">AboutUs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li> 
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
              <li>
                <Link to="/blogpost">Write</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          
        </div>
      </header>
    
    </React.Fragment>
  );
};

export default Header;
