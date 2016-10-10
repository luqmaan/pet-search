import React, {Component} from 'react';
import {Toolbar, NavItem, Space} from 'rebass';
import classNames from 'classnames';

import roles from './roles.json';
import counters from './counters.json';
import {
  getTopScores,
  getTopFour,
  getAllRolePicks,
} from './undersight';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enemyPicks: [],
      topFourPicks: [],
      rolePicks: null,
    };
  }

  addPick = (pick) => {
    let enemyPicks = [...this.state.enemyPicks, pick];
    this.setState({enemyPicks});
    const topFourPicks = getTopFour(counters, enemyPicks);
    this.setState({topFourPicks});
    const rolePicks = getAllRolePicks(counters, enemyPicks, roles);
    this.setState({rolePicks});
  }

  render() {
    return (
      <div className="App">
        <div className="HeroPicker">
          {roles.map((hero) => (
            <button key={hero.name} className="Hero" onClick={() => this.addPick(hero.name)}>
              {hero.name}
            </button>
          ))}
          <h3>Enemy Team</h3>
          {this.state.enemyPicks.map((name, i) => <div key={i}>{name}</div>)}
          <div className="TopThree">
            <h3>Top Four Counters</h3>
            {this.state.topFourPicks.map((counter) => (
              <div key={counter.name}><strong>{counter.name}</strong> Score: {counter.score}</div>
            ))}
          </div>
          {this.state.rolePicks && (
            <div className="TopThree">
              <h3>By Role</h3>
              <div>Offense: {this.state.rolePicks.Offense.name} {this.state.rolePicks.Offense.score}</div>
              <div>Defense: {this.state.rolePicks.Defense.name} {this.state.rolePicks.Defense.score}</div>
              <div>Tank: {this.state.rolePicks.Tank.name} {this.state.rolePicks.Tank.score}</div>
              <div>Support: {this.state.rolePicks.Support.name} {this.state.rolePicks.Support.score}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
