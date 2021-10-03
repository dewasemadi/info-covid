import { useGetSummaryQuery } from '../../redux/services/covid-indonesia.service';
import { Box, Skeleton, Card, CardContent } from '@mui/material';
import { formatDateToUs } from '../../utils/formatter';
import { useState, useEffect } from 'react';

export default function Summary() {
  const { data, error, isLoading } = useGetSummaryQuery('');
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (data) {
      setRes([
        { title: 'Confirmed Cases', color: '#fb3575', cases: data.positif },
        { title: 'Treated', color: '#f7bc43', cases: data.dirawat },
        { title: 'Recovered', color: '#64d41f', cases: data.sembuh },
        { title: 'Death', color: '#000000', cases: data.meninggal }
      ]
      )
    }
  }, [data]);

  const list = (params) => (
    <Box sx={{
      display: { sm: 'block', md: 'flex' },
      justifyContent: 'space-between', mt: 2
    }}>
      {
        params.map((data, idx) => (
          <Box sx={{ my: 1 }} key={idx}>
            <Card sx={{ minWidth: 210 }} variant="outlined" >
              <CardContent style={{ paddingBottom: '16px' }}>
                {
                  data ? (
                    <>
                      <h3 style={{ color: data.color, textAlign: 'center' }}>{data.cases.toLocaleString()}</h3>
                      <p style={{ textAlign: 'center' }}> {data.title}</p>
                    </>
                  ) : (
                    <>
                      <Skeleton variant="text" animation="wave" />
                      <Skeleton variant="text" animation="wave" />
                    </>
                  )
                }
              </CardContent>
            </Card>
          </Box>
        ))
      }
    </Box>
  )

  return (
    <div>
      {error ? (
        <p style={{ textAlign: 'center' }}>Ups.. Network error</p>
      ) : isLoading ? (
        <Box
          m="auto"
          sx={{
            width: {
              md: 350,
            },
          }}
        >
          <Skeleton variant="text" animation="wave" />
        </Box>
      ) : data ? (
        <p style={{ textAlign: 'center' }}>Last Update on {formatDateToUs(data.lastUpdate)}</p>
      ) : null}

      {
        error ? (
          <></>
        ) : isLoading ? (
          list([...Array(4)])
        ) : data ? (
          list(res)
        ) : null
      }
    </div >
  )
}