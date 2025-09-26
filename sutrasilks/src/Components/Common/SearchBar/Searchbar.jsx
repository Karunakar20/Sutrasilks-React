import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
      // For example: onSearch(searchQuery);
      alert(`Searching Sutra Silks collection for: "${searchQuery}"`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="crystal-search-container">
      <div className={`crystal-search-wrapper ${isFocused ? 'focused' : ''}`}>
        {/* Crystal Prism Facets */}
        <div className="crystal-facets">
          <div className="facet facet-1"></div>
          <div className="facet facet-2"></div>
          <div className="facet facet-3"></div>
        </div>

        {/* Search Icon */}
        <svg 
          className="crystal-search-icon" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Search Input */}
        <input
          type="text"
          className="crystal-search-input"
          placeholder="Search for handloom sarees..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label="Search for silk products"
        />

        {/* Search Button */}
        <button 
          className="crystal-search-button" 
          type="submit"
          onClick={handleSearch}
          aria-label="Submit search"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Optional: Search suggestions or results can be added here */}
      {searchQuery && (
        <div className="search-suggestions">
          {/* Add search suggestions logic here */}
        </div>
      )}
    </div>
  );
};

export default Searchbar;