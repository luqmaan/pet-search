import React, {Component} from 'react';
import Select from 'react-select';

const options = [
  {label: 'is', value: 'is'},
  {label: 'is not', value: 'is not'},
  {label: 'starts with', value: 'starts with'},
  {label: 'ends with', value: 'ends with'},
  {label: 'has substring', value: 'has substring'},
]

export default class FieldSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'is',
    }
  }

  render() {
    return (
      <div className="search-input" style={{minWidth: 150}}>
        <Select
          options={options}
          value={this.state.value}
          onChange={(newValue) => this.setState({value: newValue.value})}
        />
      </div>
    );
  }
}
