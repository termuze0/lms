import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "../../styles/NavBar.css"
import logo from "../../assets/images/logo.svg";
const ProfileDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="relative">
            {/* Profile Picture */}
            <img
                src={logo} // Replace with the path to your profile picture
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
                    <ul className="py-1 text-gray-700">
                        <li>
                            <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                                Dark Mode
                            </button>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Settings
                            </Link>
                        </li>
                        <li>
                            <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
