import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

const Conditions = [
  {label: 'is', value: 'is'},
  {label: 'is not', value: 'is_not'},
  {label: 'starts with', value: 'starts_with'},
  {label: 'ends with', value: 'ends_with'},
  {label: 'contains', value: 'has_substring'},
];

export default class SearchConditionSelect extends Component {
  static propTypes = {
    searchCondition: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="SearchInput" style={{minWidth: 150}}>
        <Select
          options={Conditions}
          value={this.props.searchCondition}
          onChange={(option) => this.props.onChange(option.value)}
          clearable={false}
        />
      </div>
    );
  }
}
