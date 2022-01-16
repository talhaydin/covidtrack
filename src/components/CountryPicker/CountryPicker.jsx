import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountriesEffect = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchCountriesEffect();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue="Global"
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {' '}
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
