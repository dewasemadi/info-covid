import { useGetSummaryQuery } from '../../redux/services/covid-indonesia.service';
import { Box, Skeleton, Card, CardContent, Button, Grid } from '@mui/material';
import { formatDateToUs } from '../../utils/formatter';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import styles from './Summary.style';
const useStyles = makeStyles(styles);

export default function Summary() {
  const classes = useStyles();
  const router = useRouter();
  const { data, error, isLoading } = useGetSummaryQuery('');
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (data) {
      setRes([
        { title: 'Confirmed Cases', color: '#fb3575', cases: data.positif },
        { title: 'Treated', color: '#f7bc43', cases: data.dirawat },
        { title: 'Recovered', color: '#64d41f', cases: data.sembuh },
        { title: 'Death', color: '#000000', cases: data.meninggal },
      ]);
    }
  }, [data]);

  const handleReload = () => {
    router.reload();
  };

  const list = (params) => (
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, lg: 12 }} className={classes.mt20}>
      {params.map((data, idx) => (
        <Grid item xs={12} sm={4} md={2} key={idx}>
          <Card sx={{ minWidth: 210 }} variant="outlined">
            <CardContent className={classes.pt16}>
              {data ? (
                <>
                  <h3 style={{ color: data.color, textAlign: 'center' }}>{data.cases.toLocaleString()}</h3>
                  <p className={classes.textCenter}> {data.title}</p>
                </>
              ) : (
                <>
                  <Skeleton variant="text" animation="wave" height={28} />
                  <Skeleton variant="text" animation="wave" height={24} />
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      {error ? (
        <div className={classes.container}>
          <div>
            <p className={classes.errorMessage}>Oops.. Something went wrong. Failed to get data, please try again.</p>
            <Button onClick={handleReload} variant="outlined" className={classes.btnCustom}>
              Try Again
            </Button>
          </div>
        </div>
      ) : isLoading ? (
        <Box
          m="auto"
          sx={{
            width: {
              md: 350,
            },
          }}
        >
          <h2 className={classes.title}>Covid-19 Cases in Indonesia</h2>
          <Skeleton variant="text" animation="wave" height={24} />
        </Box>
      ) : data ? (
        <>
          <h2 className={classes.title}>Covid-19 Cases in Indonesia</h2>
          <p className={classes.desc}>Last Updated on {formatDateToUs(data.lastUpdate)}</p>
        </>
      ) : null}

      {error ? <></> : isLoading ? list([...Array(4)]) : data ? list(res) : null}
    </div>
  );
}
