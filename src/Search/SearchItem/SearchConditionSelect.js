import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

const Conditions = [
  {label: 'is', value: 'is'},
  {label: 'is not', value: 'is not'},
  {label: 'starts with', value: 'starts with'},
  {label: 'ends with', value: 'ends with'},
  {label: 'has substring', value: 'has substring'},
];

export default class SearchConditionSelect extends Component {
  static propTypes = {
    searchCondition: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="search-input" style={{minWidth: 150}}>
        <Select
          options={Conditions}
          value={this.props.searchCondition}
          onChange={(option) => this.props.onChange(option.value)}
        />
      </div>
    );
  }
}
