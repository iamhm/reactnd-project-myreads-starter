import React from 'react';
import PropTypes from 'prop-types';

import BookList from './bookList';

const Home = (props) => {
  return (
    <div className="container app-container">
      <div className="row">
        <BookList
          name={props.currentBookshelf.name}
          books={props.currentBookshelf.books}
          shelf={props.currentBookshelf.id}
          actions={props.actions}
        />

        <BookList
          name={props.desiredBookshelf.name}
          books={props.desiredBookshelf.books}
          shelf={props.desiredBookshelf.id}
          actions={props.actions}
        />

        <BookList
          name={props.finishedBookshelf.name}
          books={props.finishedBookshelf.books}
          shelf={props.finishedBookshelf.id}
          actions={props.actions}
        />
      </div>
    </div>
  );
};

BookList.propTypes = {
  currentBookshelf: PropTypes.object,
  desiredBookshelf: PropTypes.object,
  finishedBookshelf: PropTypes.object,
  actions: PropTypes.object
};

export default Home;