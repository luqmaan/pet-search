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

export function getWhereClause(whereTerms = {}) {
  const formattedSearches = map(whereTerms).map((search) => formatSearch(search));
  if (formattedSearches.length === 0) {
    return '';
  }
  return `WHERE ${formattedSearches.join(' AND ')}`;
}

export function getQuery(selectClause, whereTerms, orderClause, pagination) {
  const whereClause = getWhereClause(whereTerms);
  return `${selectClause}
    ${whereClause}
    ${orderClause}
    LIMIT ${pagination.limit}
    OFFSET ${pagination.offset}
  `;
}

export function querySocrata(url, whereTerms, pagination) {
  const query = getQuery('SELECT *', whereTerms, 'ORDER BY datetime DESC', pagination);
  const formattedUrl = `${url}?$query=${query}`;
  return fetch(formattedUrl)
    .then((res) => parseResponse(res));
}

export function querySocrataCounts(url, whereTerms, pagination) {
  const query = getQuery('SELECT count(0)', whereTerms, '', pagination, );
  const formattedUrl = `${url}?$query=${query}`;
  return fetch(formattedUrl)
    .then((res) => parseResponse(res))
    .then((data) => Number(data[0].count_0));
}
