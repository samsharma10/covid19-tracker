import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchData  = await fetchData();
    this.setState({ data: fetchedData });
  }

  render(){
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    )
    }
}

export default App;
