import sum from 'lodash/sum';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import take from 'lodash/take';
import head from 'lodash/head';


export function getTopScores(counters, enemyPicks) {
  let scores = {};
  enemyPicks.forEach((pick) => scores[pick] = 0);
  counters.forEach((counter) => {
    scores[counter.you] = sum(enemyPicks.map(
      (enemy) => counters.find(x => x.enemy === enemy && x.you === counter.you).score
    ));
  });
  return sortBy(map(scores, (score, name) => ({score, name})), 'score').reverse();
}

export function getTopFour(counters, enemyPicks) {
  const scores = getTopScores(counters, enemyPicks);
  return take(scores, 4);
}

export function getHeroCounters(counters, enemy) {
  const scores = getTopScores(counters, [enemy]);
  return take(scores, 2);
}

export function getRole(heroName, roles) {
  const matchingRole = roles.find((role) => role.name === heroName);
  return matchingRole.role;
}

export function getRolePicks(counters, enemyPicks, roles, role) {
  const countersWithRole = counters.filter((counter) => getRole(counter.you, roles) === role);
  return getTopScores(countersWithRole, enemyPicks);
}

export function getAllRolePicks(counters, enemyPicks, roles) {
  return {
    Offense: head(getRolePicks(counters, enemyPicks, roles, 'Offense')),
    Defense: head(getRolePicks(counters, enemyPicks, roles, 'Defense')),
    Tank: head(getRolePicks(counters, enemyPicks, roles, 'Tank')),
    Support: head(getRolePicks(counters, enemyPicks, roles, 'Support')),
  }
}
