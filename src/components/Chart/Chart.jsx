import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';
import { Line } from 'react-chartjs-2';
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

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDaily());
    };

    fetchAPI();
  }, []);

  console.log(country);

  const singleChart = data.confirmed ? (
    <Line
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0,0,255,0.5)',
              'rgba(0,255,0,0.5)',
              'rgba(255,0,0)',
            ],
          },
        ],
        data: [data.confirmed, data.recovered, data.deaths],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    ></Line>
  ) : null;

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

  return (
    <div className={styles.container}> {country ? singleChart : mainChart}</div>
  );
};

export default Chart;
