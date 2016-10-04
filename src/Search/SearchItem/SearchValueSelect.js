import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

import {parseResponse} from '../../helpers/api';

export default class SearchValueSelect extends Component {
  static propTypes = {
    searchField: PropTypes.string,
    searchValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchField !== newProps.searchField) {
      this.props.onChange(null);
    }
  }

  loadOptions = (input, callback) => {
    const {searchField} = this.props;
    const url = `https://data.austintexas.gov/resource/fdzn-9yqv.json?$query=SELECT ${searchField} GROUP BY ${searchField} ORDER BY ${searchField} ASC LIMIT 500`;

    fetch(url)
      .then((res) => parseResponse(res))
      .then((data) => {
        const options = data.map((row) => ({value: row[searchField], label: row[searchField]}))
        callback(null, {options, complete: false});
      });
  }

  onChange = (newValue) => {
    this.props.onChange(newValue ? newValue.value : null);
  }

  render() {
    return (
      <div className="SearchInput" style={{flex: 1, minWidth: 200}}>
        <Select.Async
          key={this.props.searchField} /* Need this to prevent caching */
          loadOptions={this.loadOptions}
          value={this.props.searchValue}
          onChange={this.onChange}
          cache={false}
        />
      </div>
    );
  }

}
