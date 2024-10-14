import React, { useState } from 'react';


// import "../../styles/SearchBar.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
        setQuery('');
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
            />
            <button type="submit" className="search-button">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </form>
    );
};

export default SearchBar;
