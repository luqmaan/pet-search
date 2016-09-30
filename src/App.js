import React, { Component } from 'react';
import moment from 'moment';

import './data.css';

import IntakesTable from'./IntakesTable';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intakes: [],
    };
  }

  componentDidMount() {
    this.loadIntakes();
  }

  loadIntakes = () => {
    const start = moment().subtract(15, 'days').format('YYYY-MM-DD');
    const end = moment().format('YYYY-MM-DD');
    const query = `SELECT *
      ORDER BY datetime DESC
    `;

    const url = `https://data.austintexas.gov/resource/fdzn-9yqv.json?$query=${query}`;

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data)
          throw new Error(data.message);
        }

        this.setState({intakes: data})
      });
  }

  render() {
    // {this.state.intakes && this.state.intakes.map((intake) => <Intake intake={intake} key={intake.animal_id}/>)}

    return (
      <div>
          <IntakesTable dataList={this.state.intakes} />
      </div>
    );
  }
}

export default App;
