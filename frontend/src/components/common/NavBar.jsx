import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

import useAuth from '../../hooks/useAuth';
import logo from '../../assets/images/logo.jpeg'

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isAuthenticated = false;

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                
                <div className="flex items-center space-x-4">
                    <Link to="/" className="navbar-logo"><img src={logo} alt="" srcset="" /></Link>
                    <button className="navbar-hamburger" onClick={toggleMobileMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>

                
                <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    {isAuthenticated && (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/contact">Contact</Link>
                        </>
                    )}
                </div>

               
                <div className={isAuthenticated ? "navbar-profile" : "navbar-auth"}>
                    {isAuthenticated ? (
                        <div className="profile">
                            <ProfileDropdown />
                        </div>
                    ) : (
                        <>
                            <Link className='Authbtn' to="/login">Login</Link>
                            <Link className='Authbtn' to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
