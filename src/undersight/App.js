import React, {Component} from 'react';
import {Toolbar, NavItem, Space} from 'rebass';
import classNames from 'classnames';

import counters from './counters.json';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: [{name: 'Pharah'}, {name: 'Soldier 76'}, {name: 'Reaper'}],
      counters,
      enemyPicks: ['Soldier 76'],
      teamPicks: ['Pharah'],
      recommendations: [],
    };
  }

  render() {
    this.state.counters.filter((counter) => {
      return counter.enemy === 'Pharah';
    });

    return (
      <div className="App">
        <div className="HeroPicker">
          {this.state.heros.map((hero) => (
            <div className="Hero">
              {hero.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
