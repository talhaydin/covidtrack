import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDaily());
    };
    fetchAPI();
  }, []);

  const mainChart = {};

  return <h1>Chart</h1>;
};

export default Chart;
