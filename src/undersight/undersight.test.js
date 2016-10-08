import sum from 'lodash/sum';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import counters from './counters.json';

function getTopScores(counters, enemyPicks) {
  let scores = {};
  enemyPicks.forEach((pick) => scores[pick] = 0);
  counters.forEach((counter) => {
    scores[counter.you] = sum(enemyPicks.map(
      (enemy) => counters.find(x => x.enemy === enemy && x.you === counter.you).score
    ))
  })
  return scores;
}

describe('undersight', () => {
  describe('getTopScores', () => {
    it('should calculate scores', () => {
      expect(getTopScores(counters, ['Pharah', 'Pharah', 'Pharah'])).toMatchSnapshot();
      expect(getTopScores(counters, ['Reaper', 'Reaper', 'Reaper'])).toMatchSnapshot();
      expect(getTopScores(counters, ['Soldier 76', 'Soldier 76', 'Soldier 76'])).toMatchSnapshot();
      expect(getTopScores(counters, ['Reaper', 'Soldier 76', 'Pharah'])).toMatchSnapshot();
      expect(getTopScores(counters, ['Soldier 76', 'Pharah', 'Reaper'])).toMatchSnapshot();
    });
  });
});
