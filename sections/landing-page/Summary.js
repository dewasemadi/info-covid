import { useState, useEffect } from 'react';
import { Grid, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../../styles/pages/home.style';
import { useGetGlobalSummaryQuery } from '../../redux/services/covid.service';
import { formatDateToUs } from '../../utils/formatter';
const useStyles = makeStyles(styles);

export default function Summary() {
  const classes = useStyles();
  const { data, error, isLoading } = useGetGlobalSummaryQuery('');
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (data) {
      setRes([
        { title: 'Confirmed Cases', color: '#fb3575', cases: data.confirmed.value },
        { title: 'Recovered', color: '#64d41f', cases: data.recovered.value },
        { title: 'Death', color: '#000000', cases: data.deaths.value },
      ]);
    }
  }, [data]);

  return (
    <div>
      <h3 className={classes.title2}>Global Cases</h3>
      <Grid container spacing={{ xs: 2, md: 2 }} className={classes.summaryContainer}>
        {res.map(({ title, color, cases }, idx) => (
          <Grid item xs={12} sm={12} md={4} key={idx}>
            <Card className={classes.shadow}>
              <CardContent style={{ paddingBottom: '16px' }}>
                {data ? (
                  <>
                    <h3 style={{ textAlign: 'center', color: `${color}` }}>{cases.toLocaleString()}</h3>
                    <p style={{ textAlign: 'center' }}>{title}</p>
                  </>
                ) : (
                  <>
                    <h3 style={{ textAlign: 'center' }}>-</h3>
                    <p style={{ textAlign: 'center' }}>-</p>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className={classes.update}>{data && <p>Last Updated on {formatDateToUs(data.lastUpdate)}</p>}</div>
    </div>
  );
}
