import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, searchQuery = '' }) => {
    const [query, setQuery] = useState(searchQuery);

    // Sync với prop searchQuery khi component cha reset
    useEffect(() => {
        setQuery(searchQuery);
    }, [searchQuery]);

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm món ăn..." 
                        value={query} 
                        onChange={handleChange}
                        className="search-input"
                    />
                    {query && (
                        <button 
                            type="button" 
                            onClick={handleClear}
                            className="clear-search-btn"
                            aria-label="Xóa tìm kiếm"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <button type="submit" className="search-submit-btn">
                    🔍
                </button>
            </form>
        </div>
    );
};

export default SearchBar;