import React, {Component} from 'react';
import Select from 'react-select';
import {ButtonCircle} from 'rebass';
import Icon from 'react-geomicons';

import {IntakeFields} from '../../Constants';

export default class SearchValue extends Component {

  render() {
    return (
      <div className="search-input" style={{flex: 1, minWidth: 200}}>
        <Select
          options={IntakeFields}
          value={this.props.field}
          onChange={(field) => this.props.onChange(field.value)}
        />
      </div>
    );
  }

}
