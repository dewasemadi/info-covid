import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { useGetDataByProvincesQuery } from '../../redux/services/covid-indonesia.service';
import { Box, Skeleton } from '@mui/material';
const format = require('lodash');

export default function BarChart() {
  const { data, error, isLoading } = useGetDataByProvincesQuery('');
  const [provinces, setProvinces] = useState([]);
  const [cases, setCases] = useState([]);
  const [treated, setTreated] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeath] = useState([]);

  useEffect(() => {
    if (data) {
      setProvinces(
        data.map((arg) => {
          const lower = format.toLower(arg.provinsi);
          return format.startCase(lower);
        })
      );
      setCases(data.map((arg) => arg.kasus));
      setTreated(data.map((arg) => arg.dirawat));
      setRecovered(data.map((arg) => arg.sembuh));
      setDeath(data.map((arg) => arg.meninggal));
    }
  }, [data]);

  const dataSource = {
    labels: provinces,
    datasets: [
      {
        label: 'Confirmed Cases',
        data: cases,
        backgroundColor: 'rgb(251, 53, 117)',
      },
      {
        label: 'Treated',
        data: treated,
        backgroundColor: 'rgb(247, 188, 67)',
      },
      {
        label: 'Recovered',
        data: recovered,
        backgroundColor: 'rgb(100, 212, 31)',
      },
      {
        label: 'Death',
        data: death,
        backgroundColor: 'rgb(0, 0, 0)',
      },
    ],
  };

  const options = {
    interaction: {
      mode: 'index',
      axis: 'y',
    },
    maintainAspectRatio: false,
    scales: {
      xAxex: {
        title: {
          display: true,
          text: 'Provinces',
        },
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
        },
      },
      yAxes: {
        title: {
          display: true,
          text: 'Number of cases',
        },
      },
    },
  };

  return (
    <div>
      {error ? (
        <p>Upps.. Network error</p>
      ) : isLoading ? (
        <Box
          m="auto"
          sx={{
            width: {
              lg: 900,
            },
          }}
        >
          <Skeleton variant="rectangular" animation="wave" height={550} />
        </Box>
      ) : data ? (
        <Box
          m="auto"
          sx={{
            width: {
              lg: 900,
            },
          }}
        >
          <Bar data={dataSource} options={options} responsive="true" height={550} />
        </Box>
      ) : null}
    </div>
  );
}
