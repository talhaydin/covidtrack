import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components/export';
import styles from './App.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards></Cards>
        <Chart></Chart>
        <CountryPicker></CountryPicker>
      </div>
    );
  }
}
