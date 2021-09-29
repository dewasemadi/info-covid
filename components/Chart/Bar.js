import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { useGetDataByProvincesQuery } from '../../redux/services/covid-indonesia.service';
import { Box, Skeleton } from '@mui/material';
const string = require('lodash');

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
          const lower = string.toLower(arg.provinsi);
          return string.startCase(lower);
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
        fill: false,
        backgroundColor: 'rgb(251, 53, 117)',
      },
      {
        label: 'Recovered',
        data: recovered,
        fill: false,
        backgroundColor: 'rgb(100, 212, 31)',
      },
      //   {
      //     label: 'Treated',
      //     data: treated,
      //     fill: false,
      //     backgroundColor: 'rgb(247, 188, 67)',
      //   },
      //   {
      //     label: 'Death',
      //     data: death,
      //     fill: false,
      //     backgroundColor: 'rgb(0, 0, 0)',
      //   },
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
        //   sx={{
        //     width: {
        //       xs: 100,
        //       sm: 200,
        //       md: 300,
        //       lg: 400,
        //       xl: 500,
        //     },
        //   }}
        >
          <Skeleton variant="rectangular" height={500} />
        </Box>
      ) : data ? (
        <Bar data={dataSource} options={options} responsive="true" height={500} width={600} />
      ) : null}
    </div>
  );
}
