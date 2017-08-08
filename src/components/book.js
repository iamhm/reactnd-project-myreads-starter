import React from 'react';
import PropTypes from 'prop-types';

import BookCover from './bookCover';
import BookDetail from './bookDetail';
import BookAction from './bookAction';

const Book = (props) => {
  return (
    <div className="col-md-3">
      <div className="panel panel-default app-book-card">
        <BookCover book={props.book} />
        <BookDetail book={props.book} />
        <BookAction
          book={props.book}
          shelf={props.shelf}
          actions={props.actions}
          searchClickHandler={props.searchClickHandler}
        />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  shelf: PropTypes.string,
  actions: PropTypes.object,
  searchClickHandler: PropTypes.func
};

export default Book;
