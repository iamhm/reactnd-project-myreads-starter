import React from 'react';
import { Route } from 'react-router-dom';
import {
  currentBookshelf,
  desiredBookshelf,
  finishedBookshelf
} from '../common/bookshelves';

import Header from './header';
import Home from './home';
import Search from './search';
import * as BooksAPI from '../BooksAPI';

class App extends React.Component {
  constructor(props) {
    super(props);

    // application bindings
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.onCurrentBooksClick = this.onCurrentBooksClick.bind(this);
    this.onDesiredBooksClick = this.onDesiredBooksClick.bind(this);
    this.onFinishedBooksClick = this.onFinishedBooksClick.bind(this);
    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onSearchActionClick = this.onSearchActionClick.bind(this);

    // application state
    this.state = {
      searchResults: [],
      currentBookshelf: {
        id: currentBookshelf,
        name: 'Currently Reading',
        books: []
      },
      desiredBookshelf: {
        id: desiredBookshelf,
        name: 'Want to Read',
        books: []
      },
      finishedBookshelf: {
        id: finishedBookshelf,
        name: 'Read',
        books: []
      },
      actions: {
        currentBooksActionClick: this.onCurrentBooksClick,
        desiredBooksActionClick: this.onDesiredBooksClick,
        finishedBooksActionClick: this.onFinishedBooksClick
      }
    };
  }

  /**
   * @param {EventHandler} event - onclick event handler
   * @param {string} stateProperty - property name
   * @param {object} book
   */
  onCurrentBooksClick = (event, stateProperty, book) => {
    event.preventDefault();

    if (stateProperty === null) {
      // remove book from shelf
      const currentBookshelf = this.state.currentBookshelf;
      let newCurrentBookshelf = this.removeBook(currentBookshelf, book);

      this.setState({
        currentBookshelf: newCurrentBookshelf
      });

    } else {
      // transfer book from one shelf to another
      const currentBookshelf = this.state.currentBookshelf;
      let newCurrentBookshelf = this.removeBook(currentBookshelf, book);

      const specifiedBookshelf = this.state[stateProperty];
      let newSpecifiedBookshelf = this.addBook(specifiedBookshelf, book);

      this.setState({
        currentBookshelf: newCurrentBookshelf,
        stateProperty: newSpecifiedBookshelf
      });
    }
  }

  /**
   * @param {EventHandler} event - onclick event handler
   * @param {string} stateProperty - property name
   * @param {object} book
   */
  onDesiredBooksClick = (event, stateProperty, book) => {
    event.preventDefault();

    if (stateProperty === null) {
      // remove book from shelf
      const desiredBookshelf = this.state.desiredBookshelf;
      let newDesiredBookshelf = this.removeBook(desiredBookshelf, book);

      this.setState({
        desiredBookshelf: newDesiredBookshelf
      });

    } else {
      // transfer book from one shelf to another
      const desiredBookshelf = this.state.desiredBookshelf;
      let newDesiredBookshelf = this.removeBook(desiredBookshelf, book);

      const specifiedBookshelf = this.state[stateProperty];
      let newSpecifiedBookshelf = this.addBook(specifiedBookshelf, book);

      this.setState({
        desiredBookshelf: newDesiredBookshelf,
        stateProperty: newSpecifiedBookshelf
      });
    }
  }

  /**
   * @param {EventHandler} event - onclick event handler
   * @param {string} stateProperty - property name
   * @param {object} book
   */
  onFinishedBooksClick = (event, stateProperty, book) => {
    event.preventDefault();

    if (stateProperty === null) {
      // remove book from shelf
      const finishedBookshelf = this.state.finishedBookshelf;
      let newFinishedBookshelf = this.removeBook(finishedBookshelf, book);

      this.setState({
        finishedBookshelf: newFinishedBookshelf
      });

    } else {
      // transfer book from one shelf to another
      const finishedBookshelf = this.state.finishedBookshelf;
      let newFinishedBookshelf = this.removeBook(finishedBookshelf, book);

      const specifiedBookshelf = this.state[stateProperty];
      let newSpecifiedBookshelf = this.addBook(specifiedBookshelf, book);

      this.setState({
        finishedBookshelf: newFinishedBookshelf,
        stateProperty: newSpecifiedBookshelf
      });
    }
  }

  /**
   * @param {object} bookshelf - state bookshelf object
   * @param {object} book
   */
  addBook = (bookshelf, book) => {
    return Object.assign(
      {},
      bookshelf,
      bookshelf.books = bookshelf.books.concat(book)
    );
  }

  /**
   * @param {object} bookshelf - state bookshelf object
   * @param {object} book
   */
  removeBook = (bookshelf, book) => {
    return Object.assign(
      {},
      bookshelf,
      bookshelf.books = bookshelf.books.filter((bk) => { return bk.id !== book.id; })
    );
  }

  /**
   * @param {EventHandler} event - onchange event handler
   */
  onSearchQueryChange = (event) => {
    if (event.target.value.length === 0) {
      // clear search results
      this.setState({ searchResults: [] });

    } else {
      // retrieve search results
      BooksAPI.search(event.target.value, 10)
        .then((response) => {
          this.setState({ searchResults: response });
        })
        .catch((error) => {
          // todo - error handling
          console.log(error);
        });
    }
  }

  /**
   * @param {EventHandler} event - onclick event handler
   * @param {string} stateProperty - property name
   * @param {object} book
   */
  onSearchActionClick = (event, stateProperty, book) => {
    event.preventDefault();

    const specifiedBookshelf = this.state[stateProperty];
    let newSpecifiedBookshelf = this.addBook(specifiedBookshelf, book);

    this.setState({
      stateProperty: newSpecifiedBookshelf
    });
  }

  render() {
    return (
      <div>
        <Header />

        <Route exact path="/" render={() => (
          <Home
            currentBookshelf={this.state.currentBookshelf}
            desiredBookshelf={this.state.desiredBookshelf}
            finishedBookshelf={this.state.finishedBookshelf}
            actions={this.state.actions}
          />
        )} />

        <Route path="/search" render={() => (
          <Search
            searchResults={this.state.searchResults}
            searchChangeHandler={this.onSearchQueryChange}
            searchClickHandler={this.onSearchActionClick}
          />
        )} />
      </div>
    );
  }
};

export default App;
