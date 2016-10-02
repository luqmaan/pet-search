import React, { Component } from 'react';

import 'react-select/dist/react-select.css';
import './App.css';

import {querySocrata} from './helpers/api';
import Search from './Search';
import Intake from './Intake';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intakes: [],
      currentFilters: [],
    };
  }

  componentDidMount() {
    this.loadIntakes();
  }

  setCurrentFilters = (filters) => {
    this.setState({currentFilters: filters});
  }

  loadIntakes = (search) => {
    querySocrata('https://data.austintexas.gov/resource/fdzn-9yqv.json', search)
      .then((data) => this.setState({intakes: data}));
  }

  applySearch = (search) => {
    this.loadIntakes(search);
  }

  render() {
    return (
      <div>
        <div className="Header">
          <h1>Animal Intakes</h1>
        </div>
        <Search onChange={this.applySearch} />
        <div className='SearchResults'>
          {this.state.intakes && this.state.intakes.map((intake) => <Intake intake={intake} key={intake.animal_id}/>)}
        </div>
      </div>
    );
  }
}
