import map from 'lodash/map';

export function parseResponse(res) {
  return res.json()
    .then((data) => {
      if (data.error) {
        console.error(data)
        throw new Error(data.message);
      }
      return data;
    })
}

export function formatSearch({searchField, searchCondition, searchValue}) {
  if (searchCondition === 'is') {
    return `${searchField} = '${searchValue}'`;
  }
  if (searchCondition === 'is_not') {
    return `${searchField} != '${searchValue}'`;
  }
  if (searchCondition === 'starts_with') {
    return `${searchField} LIKE '${searchValue}%'`;
  }
  if (searchCondition === 'ends_with') {
    return `${searchField} LIKE '%${searchValue}'`;
  }
  if (searchCondition === 'has_substring') {
    return `${searchField} LIKE '%${searchValue}%'`;
  }
  throw new Error(`Unexpected search condition: ${searchCondition}`);
}

export function getWhereClause(searches) {
  const formattedSearches = map(searches).map((search) => formatSearch(search));
  if (!formattedSearches.length) {
    return '';
  }
  return `WHERE ${formattedSearches.join(' AND ')}`;
}

export function getQuery(searches) {
  const whereClause = getWhereClause(searches);
  return `SELECT *
    ${whereClause}
    ORDER BY datetime DESC
    LIMIT 10
  `;
}

export function querySocrata(url, searches = {}) {
  const query = getQuery(searches);
  const formattedUrl = `${url}?$query=${query}`;
  return fetch(formattedUrl)
    .then((res) => parseResponse(res));
}
