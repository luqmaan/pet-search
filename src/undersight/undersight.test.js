import sum from 'lodash/sum';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import take from 'lodash/take';
import head from 'lodash/head';
import allCountersJSON from './counters.json';
import rolesJSON from './roles.json';

function getTopScores(counters, enemyPicks) {
  let scores = {};
  enemyPicks.forEach((pick) => scores[pick] = 0);
  counters.forEach((counter) => {
    scores[counter.you] = sum(enemyPicks.map(
      (enemy) => counters.find(x => x.enemy === enemy && x.you === counter.you).score
    ));
  });
  return sortBy(map(scores, (score, you) => ({score, you})), 'score').reverse();
}

function getTopThree(counters, enemyPicks) {
  const scores = getTopScores(counters, enemyPicks);
  return take(scores, 3);
}

function getHeroCounters(counters, enemy) {
  const scores = getTopScores(counters, [enemy]);
  return take(scores, 2);
}

function getRole(heroName, roles) {
  const matchingRole = roles.find((role) => role.name === heroName);
  return matchingRole.role;
}

function getRolePicks(counters, enemyPicks, roles, role) {
  const countersWithRole = counters.filter((counter) => getRole(counter.you, roles) === role);
  return getTopScores(countersWithRole, enemyPicks);
}

function getAllRolePicks(counters, enemyPicks, roles) {
  return {
    Offense: take(getRolePicks(counters, enemyPicks, roles, 'Offense'), 1),
    Defense: take(getRolePicks(counters, enemyPicks, roles, 'Defense'), 1),
    Tank: take(getRolePicks(counters, enemyPicks, roles, 'Tank'), 1),
    Support: take(getRolePicks(counters, enemyPicks, roles, 'Support'), 1),
  }
}

const countersJSON = allCountersJSON.filter((counter) => (
  counter.you === 'Reaper' ||
  counter.you === 'Pharah' ||
  counter.you === 'Soldier: 76'
)).filter((counter) => (
  counter.enemy === 'Reaper' ||
  counter.enemy === 'Pharah' ||
  counter.enemy === 'Soldier: 76'
));


describe('undersight', () => {
  describe('getTopScores', () => {
    it('should calculate scores', () => {
      expect(getTopScores(countersJSON, ['Pharah', 'Pharah', 'Pharah'])).toMatchSnapshot();
      expect(getTopScores(countersJSON, ['Reaper', 'Reaper', 'Reaper'])).toMatchSnapshot();
      expect(getTopScores(countersJSON, ['Soldier: 76', 'Soldier: 76', 'Soldier: 76'])).toMatchSnapshot();
      expect(getTopScores(countersJSON, ['Reaper', 'Soldier: 76', 'Pharah'])).toMatchSnapshot();
      expect(getTopScores(countersJSON, ['Soldier: 76', 'Pharah', 'Reaper'])).toMatchSnapshot();
    });

    it('should calculate score for one enemy', () => {
      expect(getTopScores(countersJSON, ['Pharah'])).toMatchSnapshot();
    });

    it('should calculate score for four enemy', () => {
      expect(getTopScores(countersJSON, ['Pharah', 'Pharah', 'Pharah', 'Pharah'])).toMatchSnapshot();
    });
  });

  describe('getTopThree', () => {
    it('should get the top three counters to a team', () => {
      expect(getTopThree(countersJSON, ['Pharah', 'Pharah', 'Pharah'])).toMatchSnapshot();
      expect(getTopThree(countersJSON, ['Reaper', 'Reaper', 'Reaper'])).toMatchSnapshot();
      expect(getTopThree(countersJSON, ['Soldier: 76', 'Soldier: 76', 'Soldier: 76'])).toMatchSnapshot();
      expect(getTopThree(countersJSON, ['Reaper', 'Soldier: 76', 'Pharah'])).toMatchSnapshot();
      expect(getTopThree(countersJSON, ['Soldier: 76', 'Pharah', 'Reaper'])).toMatchSnapshot();
    });
  });

  describe('getAllRolePicks', () => {
    it('should get picks for each category', () => {
      expect(getAllRolePicks(allCountersJSON, ['Pharah', 'Pharah', 'Pharah'], rolesJSON)).toMatchSnapshot();
      expect(getAllRolePicks(allCountersJSON, ['Pharah', 'Pharah', 'Pharah', 'Zenyatta', 'Zenyatta', 'Zenyatta'], rolesJSON)).toMatchSnapshot();
    });
  });
});
