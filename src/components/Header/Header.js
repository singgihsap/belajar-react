import React from 'react';
import { Link } from 'react-router';

const Header = () => (
    <header>
        <div className="container">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Brand</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/product" >Product</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {/*<li><a href="#">About</a></li>*/}
                            {/*<li><a href="#">Contact</a></li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
);
export default Header;