import React from 'react';
import PropTypes from 'prop-types';

const BookDetail = (props) => {
  return (
    <div className="app-book-details">
      <div className="app-book-title">
        {props.book.title}
      </div>

      {props.book.authors &&
        props.book.authors.map((author) => {
          return (
            <div key={author} className="app-book-author">
              {author}
            </div>
          );
        })
      }
    </div>
  );
};

BookDetail.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookDetail;