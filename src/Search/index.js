import React, { Component, PropTypes } from 'react';

import SearchItem from './SearchItem';

import './Search.css';

export default class Search extends Component {
  static  propTypes = {
    currentFilters: PropTypes.array.isRequired,
    setCurrentFilters: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-container">
        <SearchItem />
        <SearchItem />
      </div>
    );
  }
}
