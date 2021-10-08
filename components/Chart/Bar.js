import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { useGetDataByProvincesQuery } from '../../redux/services/covid-indonesia.service';
import { Box, Skeleton, Button } from '@mui/material';
import { useRouter } from 'next/router'
const format = require('lodash');

export default function BarChart() {
  const router = useRouter();
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


  const handleReload = () => {
    router.reload();
  }

  return (
    <div>
      {error ? (
        <>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>Oops.. Something went wrong. Failed to get data, please try again.</p>
          <Button onClick={handleReload} variant="outlined" style={{ margin: "10px auto auto auto", display: 'block', textTransform: 'capitalize' }}>Try Again</Button>
        </>
      ) : isLoading ? (
        <Box
          m="auto"
          sx={{
            width: {
              lg: 900,
            },
          }}
        >
          <Skeleton variant="rectangular" animation="wave" height={550} style={{ marginTop: '15px' }} />
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
