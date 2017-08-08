import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 col-md-push-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search by Title or Author"
          onChange={props.searchChangeHandler}
        />
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  searchChangeHandler: PropTypes.func.isRequired
};

export default SearchInput;