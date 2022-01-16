import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchDaily } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDaily());
    };
    console.log(dailyData);
    fetchAPI();
  }, []);

  const mainChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths  ',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,
          },
        ],
      }}
    ></Line>
  ) : null;

  return <div className={styles.container}>{mainChart}</div>;
};

export default Chart;
