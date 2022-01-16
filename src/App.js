import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components/export';
import styles from './App.module.css';
import { fetchData } from './api';

export default class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID 19 STATS</h1>
        <Cards data={data}></Cards>
        <CountryPicker handleCountry={this.handleCountry}></CountryPicker>
        <Chart data={data} country={this.state.country}></Chart>
      </div>
    );
  }
}
