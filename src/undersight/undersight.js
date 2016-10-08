import sortBy from 'lodash/sortBy';

export function findCounters(allCounters, enemyName) {
  const counters = allCounters.filter((counter) => counter.enemy === enemyName);

  return sortBy(counters, 'score').reverse();
}

export function whoWins(allCounters, enemyPicks, teamPicks) {
  return enemyPicks.map(( ) => {

  })
}
