import React from 'react';
import PropTypes from 'prop-types';

const BookCover = (props) => {
  return (
    <div className="app-book-cover">
      {props.book.imageLinks
        ?
        <img className="app-book-thumbnail" alt={props.book.title} src={props.book.imageLinks.smallThumbnail} />
        :
        <img className="app-book-thumbnail" alt={props.book.title} src="http://via.placeholder.com/128x169?text=Book+Cover" />
      }
    </div>
  );
};

BookCover.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookCover;