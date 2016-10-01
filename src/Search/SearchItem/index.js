import React, {Component} from 'react';
import {ButtonCircle, Button} from 'rebass';
import Icon from 'react-geomicons';

import SearchFieldSelect from './SearchFieldSelect';
import SearchConditionSelect from './SearchConditionSelect';
import SearchValueSelect from './SearchValueSelect';

import './SearchItem.css';

export default class SearchItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: 'animal_type',
      searchCondition: 'is',
      searchValue: null,
    };
  }

  setSearchField = (searchField) => {
    this.setState({searchField});
  }

  setSearchCondition = (searchCondition) => {
    this.setState({searchCondition});
  }

  setSearchValue = (searchValue) => {
    this.setState({searchValue});
  }

  render() {
    return (
      <div className="search-item">
        <SearchFieldSelect
          searchField={this.state.searchField}
          onChange={this.setSearchField}
        />
        <SearchConditionSelect
          searchCondition={this.state.searchCondition}
          onChange={this.setSearchCondition}
        />
        <SearchValueSelect
          searchField={this.state.searchField}
          searchValue={this.state.searchValue}
          onChange={this.setSearchValue}
        />
        <Button title="And" pill style={{marginRight: 10}}>And</Button>
        <ButtonCircle title="Delete" color="midgray" backgroundColor="gray" pill>
          <Icon name="trash" />
        </ButtonCircle>
      </div>
    );
  }
}
