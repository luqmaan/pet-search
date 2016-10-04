import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

import {IntakeFields} from '../../Constants';

export default class SearchFieldSelect extends Component {
  static propTypes = {
    searchField: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="SearchInput" style={{flex: 1, minWidth: 200}}>
        <Select
          options={IntakeFields}
          value={this.props.searchField}
          onChange={(option) => this.props.onChange(option.value)}
          clearable={false}
        />
      </div>
    );
  }

}
