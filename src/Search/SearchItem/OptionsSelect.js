import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

import {parseResponse} from '../../helpers/api';

export default class OptionsSelect extends Component {
  static propTypes = {
    field: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.field !== newProps.field) {
      this.setState({value: null});
    }
  }

  loadOptions = (input, callback) => {
    const {field} = this.props;
    const url = `https://data.austintexas.gov/resource/fdzn-9yqv.json?$query=SELECT ${field} GROUP BY ${field} ORDER BY ${field} ASC LIMIT 500`;

    fetch(url)
      .then((res) => parseResponse(res))
      .then((data) => {
        const options = data.map((row) => ({value: row[field], label: row[field]}))
        callback(null, {options, complete: false});
      });
  }

  onChange = (newValue) => {
    this.setState({value: newValue.value});
  }

  render() {
    return (
      <div className="search-input" style={{flex: 1, minWidth: 200}}>
        <Select.Async
          key={this.props.field} /* Need this to prevent caching */
          loadOptions={this.loadOptions}
          value={this.state.value}
          onChange={this.onChange}
          cache={false}
        />
      </div>
    );
  }

}
