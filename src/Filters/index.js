import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import SearchItem from './SearchItem';

export default class Filters extends Component {
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
      <div style={{width: 300}}>
        <SearchItem />
      </div>
    );
  }
}
