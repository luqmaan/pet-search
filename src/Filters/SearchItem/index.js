import React, {Component} from 'react';
import Select from 'react-select';

import {IntakeFields} from '../../Constants';

import ConditionSelect from './ConditionSelect';
import OptionsSelect from './OptionsSelect';

export default class SearchItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: 'animal_type',
    };
  }

  render() {
    return (
      <div>
        <Select
          options={IntakeFields}
          value={this.state.field}
          onChange={(field) => this.setState({field: field.value})}
        />
        <ConditionSelect field={this.state.field} />
        <OptionsSelect field={this.state.field} />
      </div>
    );
  }
}
