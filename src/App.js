import React, { Component } from 'react';

import moment from 'moment';

import Intake from'./Intake';

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
    const url = `https://data.austintexas.gov/resource/fdzn-9yqv.json?$query=SELECT * WHERE datetime BETWEEN '${start}' and '${end}' ORDER BY datetime ASC LIMIT 10`;

    fetch(url)
      .then(res => res.json())
      .then((data) => this.setState({intakes: data}));
  }

  render() {
    return (
      <div>
        <div>
          <h2>Pet Search</h2>

          <button onClick={this.loadIntakes}>Search</button>
          <div>
            {this.state.intakes && this.state.intakes.map((intake) => <Intake intake={intake} key={intake.animal_id}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
