import React, {Component, PropTypes} from 'react';
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
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const firstSearch = createNewSearch();

    this.state = {
      searches: {
        [firstSearch.id]: firstSearch,
      },
    };
  }

  setSearches(newSearches) {
    this.setState({searches: newSearches});
    this.props.onChange(newSearches);
  }

  updateSearch = (updatedSearch) => {
    this.setSearches({
      ...this.state.searches,
      [updatedSearch.id]: updatedSearch,
    });
  }

  addSearchItem = () => {
    const newSearch = createNewSearch();
    this.setSearches({
      ...this.state.searches,
      [newSearch.id]: newSearch,
    });
  }

  render() {
    return (
      <div className="Search">
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
