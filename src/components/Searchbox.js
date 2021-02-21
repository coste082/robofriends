import React from 'react';

const Searchbox = ({ searhField, searchChange }) => {
  return (
    <input
      type="search"
      placeholder="search robots"
      className="pa3 ba b--green bg-lightest-blue"
      onChange={searchChange}
    ></input>
  );
};

export default Searchbox;
