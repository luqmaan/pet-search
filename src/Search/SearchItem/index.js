import React, {Component} from 'react';
import Select from 'react-select';
import {ButtonCircle, Button} from 'rebass';
import Icon from 'react-geomicons';

import {IntakeFields} from '../../Constants';

import SearchField from './SearchField';
import ConditionSelect from './ConditionSelect';
import OptionsSelect from './OptionsSelect';

import './SearchItem.css';

export default class SearchItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: 'animal_type',
    };
  }

  setField = (field) => {
    this.setState({field});
  }

  render() {
    return (
      <div className="search-item">
        <SearchField field={this.state.field} onChange={this.setField} />
        <ConditionSelect field={this.state.field} />
        <OptionsSelect field={this.state.field} />
        <Button title="And" pill style={{marginRight: 10}}>And</Button>
        <ButtonCircle title="Delete" color="midgray" backgroundColor="gray" pill>
          <Icon name="trash" />
        </ButtonCircle>
      </div>
    );
  }
}
