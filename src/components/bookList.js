import React from 'react';
import PropTypes from 'prop-types';

import Book from './book';

const BookList = (props) => {
  return (
    <div className="row app-container">
      <div className="col-md-12">
        <h3 className="app-bookshelf-name">{props.name}</h3>
      </div>

      <div className="app-container">
        {props.books.length > 0 &&
          props.books.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                shelf={props.shelf}
                actions={props.actions}
              />
            );
          })
        }
      </div>
    </div>
  );
}

BookList.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default BookList;