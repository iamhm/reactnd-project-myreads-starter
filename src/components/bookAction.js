import React from 'react';
import PropTypes from 'prop-types';
import {
  currentBookshelf,
  desiredBookshelf,
  finishedBookshelf
} from '../common/bookshelves';

const BookAction = (props) => {
  if (props.shelf === currentBookshelf) {
    return (
      <div className="app-book-action">
        <div className="btn-group">
          <button type="button" className="btn btn-default app-btn-circle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>

          <ul className="dropdown-menu app-actions-menu">
            <li onClick={(event) => props.actions.currentBooksActionClick(event, desiredBookshelf, props.book)}>
                <a href="#">Want to Read</a>
            </li>

            <li onClick={(event) => props.actions.currentBooksActionClick(event, finishedBookshelf, props.book)}>
                <a href="#">Read</a>
            </li>

            <li onClick={(event) => props.actions.currentBooksActionClick(event, null, props.book)}>
                <a href="#">Remove</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.shelf === desiredBookshelf) {
    return (
      <div className="app-book-action">
        <div className="btn-group">
          <button type="button" className="btn btn-default app-btn-circle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>

          <ul className="dropdown-menu app-actions-menu">
            <li onClick={(event) => props.actions.desiredBooksActionClick(event, currentBookshelf, props.book)}>
                <a href="#">Currently Reading</a>
            </li>

            <li onClick={(event) => props.actions.desiredBooksActionClick(event, finishedBookshelf, props.book)}>
                <a href="#">Read</a>
            </li>

            <li onClick={(event) => props.actions.desiredBooksActionClick(event, null, props.book)}>
                <a href="#">Remove</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.shelf === finishedBookshelf) {
    return (
      <div className="app-book-action">
        <div className="btn-group">
          <button type="button" className="btn btn-default app-btn-circle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>

          <ul className="dropdown-menu app-actions-menu">
            <li onClick={(event) => props.actions.finishedBooksActionClick(event, currentBookshelf, props.book)}>
                <a href="#">Currently Reading</a>
            </li>

            <li onClick={(event) => props.actions.finishedBooksActionClick(event, desiredBookshelf, props.book)}>
                <a href="#">Want to Read</a>
            </li>

            <li onClick={(event) => props.actions.finishedBooksActionClick(event, null, props.book)}>
                <a href="#">Remove</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app-book-action">
        <div className="btn-group">
          <button type="button" className="btn btn-default app-btn-circle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>

          <ul className="dropdown-menu app-actions-menu">
            <li onClick={(event) => props.searchClickHandler(event, currentBookshelf, props.book)}>
              <a href="#">Currently Reading</a>
            </li>

            <li onClick={(event) => props.searchClickHandler(event, desiredBookshelf, props.book)}>
              <a href="#">Want to Read</a>
            </li>

            <li onClick={(event) => props.searchClickHandler(event, finishedBookshelf, props.book)}>
              <a href="#">Read</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

BookAction.propTypes = {
  book: PropTypes.object,
  shelf: PropTypes.string,
  actions: PropTypes.object,
  searchClickHandler: PropTypes.func

};

export default BookAction;