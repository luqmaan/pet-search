import {
  getWhereClause,
  getQuery,
} from './api';

describe('api', () => {
  describe('getWhereClause', () => {
    it('should format a single querystring', () => {
      const searches = {
        search_1: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is',
          searchValue: 'Livestock',
        },
      };

      expect(getWhereClause(searches)).toMatchSnapshot();
    });

    it('should format multiple querystring', () => {
      const searches = {
        search_1: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is',
          searchValue: 'Livestock',
        },
        search_2: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is_not',
          searchValue: 'Bird',
        },
      };

      expect(getWhereClause(searches)).toMatchSnapshot();
    });

    it('should skip null for one search', () => {
      const searches = {
        search_1: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is',
          searchValue: null,
        }
      };

      expect(getWhereClause(searches)).toMatchSnapshot();
    });

    it('should skip null two searches', () => {
      const searches = {
        search_1: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is',
          searchValue: null,
        },
        search_2: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is_not',
          searchValue: 'Bird',
        },
      };

      expect(getWhereClause(searches)).toMatchSnapshot();
    });
  });

  describe('getQuery', () => {
    it('format a query', () => {
      const searches = {
        search_1: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is',
          searchValue: 'Livestock',
        },
        search_2: {
          id: 'search_1',
          searchField: 'animal_type',
          searchCondition: 'is_not',
          searchValue: 'Bird',
        },
      };
      const pagination = {limit: 10, count: 15, offset: 6};
      expect(getQuery('SELECT *', searches, 'ORDER BY datetime', pagination)).toMatchSnapshot();
    });
  });
});
