import React from 'react';
import PropTypes from 'prop-types';

import SearchInput from './searchInput';
import SearchResults from './searchResults';

const Search = (props) => {
  return (
    <div className="container app-container">
      <SearchInput searchChangeHandler={props.searchChangeHandler} />
      <SearchResults searchResults={props.searchResults} searchClickHandler={props.searchClickHandler} />
    </div>
  );
};

Search.propTypes = {
  searchResults: PropTypes.array.isRequired,
  searchChangeHandler: PropTypes.func.isRequired,
  searchClickHandler: PropTypes.func.isRequired
};

export default Search;