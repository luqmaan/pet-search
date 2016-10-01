import {PropTypes} from 'react';

export const SearchType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  searchField: PropTypes.string,
  searchCondition: PropTypes.string,
  searchValue: PropTypes.string,
});
