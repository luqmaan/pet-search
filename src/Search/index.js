import React, {Component} from 'react';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';

import SearchItem from './SearchItem';

import './Search.css';

const createNewSearch = () => ({
  id: uniqueId('search_'),
  searchField: 'animal_type',
  searchCondition: 'is',
  searchValue: null,
});

export default class Search extends Component {
  constructor(props) {
    super(props);
    const firstSearch = createNewSearch();

    this.state = {
      searches: {
        [firstSearch.id]: firstSearch,
      },
    };
  }

  updateSearch = (updatedSearch) => {
    this.setState({searches: {
      ...this.state.searches,
      [updatedSearch.id]: updatedSearch,
    }});
  }

  addSearchItem = () => {
    const newSearch = createNewSearch();

    this.setState({
      searches: {
        ...this.state.searches,
        [newSearch.id]: newSearch,
      }
    });
  }

  render() {
    return (
      <div className="search-container">
        {map(this.state.searches, (search) => (
          <SearchItem
            key={search.id}
            search={search}
            updateSearch={this.updateSearch}
            addSearchItem={this.addSearchItem}
          />
        ))}
      </div>
    );
  }
}
