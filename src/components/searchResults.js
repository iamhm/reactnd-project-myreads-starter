import React from 'react';
import PropTypes from 'prop-types';

import Book from './book';

const SearchResults = (props) => {
  return (
    <div className="row app-container">
      {props.searchResults.length > 0 &&
        props.searchResults.map((book) => {
          return (
            <Book
              key={book.id}
              book={book}
              searchClickHandler={props.searchClickHandler}
            />
          );
        })
      }
    </div>
  );
}

SearchResults.propTypes = {
  searchResults: PropTypes.array,
  searchClickHandler: PropTypes.func
};

export default SearchResults;