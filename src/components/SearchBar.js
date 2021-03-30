import React from 'react';

const SearchBar = ({searchField, searchChange}) => {
    return (
        <div>
            <input className="searchBar bg-light-blue pa3 ma3 br2 shadow-5" type="search" 
            placeholder="search robots"
            onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBar;