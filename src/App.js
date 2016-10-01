import React, { Component } from 'react';

import 'react-select/dist/react-select.css';
import './App.css';

import {parseResponse} from './helpers/api';

import Search from './Search';
// import Intake from './Intake';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intakes: [],
      currentFilters: [],
    };
  }

  componentDidMount() {
    // this.loadIntakes();
  }

  setCurrentFilters = (filters) => {
    this.setState({currentFilters: filters});
  }

  loadIntakes = () => {
    const query = `SELECT *
      ORDER BY datetime DESC
      LIMIT 10
    `;

    const url = `https://data.austintexas.gov/resource/fdzn-9yqv.json?$query=${query}`;

    fetch(url)
      .then((res) => parseResponse(res))
      .then((data) => {
        this.setState({intakes: data})
      });
  }

  render() {
    return (
      <div className="app">
        <h1>Animal Intakes</h1>
        <Search currentFilters={this.state.currentFilters} setCurrentFilters={this.setCurrentFilters} />
        {/*this.state.intakes && this.state.intakes.map((intake) => <Intake intake={intake} key={intake.animal_id}/>)*/}
      </div>
    );
  }
}
