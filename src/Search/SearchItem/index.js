import React, {Component, PropTypes} from 'react';
import {ButtonCircle, Button} from 'rebass';
import Icon from 'react-geomicons';

import {SearchType} from '../../PropTypes';

import SearchFieldSelect from './SearchFieldSelect';
import SearchConditionSelect from './SearchConditionSelect';
import SearchValueSelect from './SearchValueSelect';

import './SearchItem.css';

export default class SearchItem extends Component {
  static propTypes = {
    search: SearchType.isRequired,
    addSearchItem: PropTypes.func.isRequired,
    updateSearch: PropTypes.func.isRequired,
  };

  setSearchField = (searchField) => {
    this.props.updateSearch({...this.props.search, searchField});
  }

  setSearchCondition = (searchCondition) => {
    this.props.updateSearch({...this.props.search, searchCondition});
  }

  setSearchValue = (searchValue) => {
    this.props.updateSearch({...this.props.search, searchValue});
  }

  render() {
    return (
      <div className="search-item">
        <SearchFieldSelect
          searchField={this.props.search.searchField}
          onChange={this.setSearchField}
        />
        <SearchConditionSelect
          searchCondition={this.props.search.searchCondition}
          onChange={this.setSearchCondition}
        />
        <SearchValueSelect
          searchField={this.props.search.searchField}
          searchValue={this.props.search.searchValue}
          onChange={this.setSearchValue}
        />
        <Button
          title="And"
          style={{marginRight: 10}}
          onClick={this.props.addSearchItem}
          pill
        >And</Button>
        <ButtonCircle title="Delete" color="midgray" backgroundColor="gray" pill>
          <Icon name="trash" />
        </ButtonCircle>
      </div>
    );
  }
}
