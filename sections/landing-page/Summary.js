import { Grid, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../../styles/pages/home.style';
const useStyles = makeStyles(styles);

export default function Summary() {
  const classes = useStyles();

  return (
    <div>
      <h3 style={{ textAlign: 'center', margin: '20px 0' }}>Global Cases</h3>
      <Grid container spacing={{ xs: 2, md: 2 }} className={classes.summaryContainer}>
        <Grid item xs={12} sm={12} md={3}>
          <Card variant='outlined'>
            <CardContent style={{ paddingBottom: '16px' }}>
              <h3 style={{ textAlign: 'center' }}>1000</h3>
              <p style={{ textAlign: 'center' }}>Confirmed Cases</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card variant='outlined'>
            <CardContent style={{ paddingBottom: '16px' }}>
              <h3 style={{ textAlign: 'center' }}>1000</h3>
              <p style={{ textAlign: 'center' }}>Confirmed Cases</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card variant='outlined'>
            <CardContent style={{ paddingBottom: '16px' }}>
              <h3 style={{ textAlign: 'center' }}>1000</h3>
              <p style={{ textAlign: 'center' }}>Confirmed Cases</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card variant='outlined'>
            <CardContent style={{ paddingBottom: '16px' }}>
              <h3 style={{ textAlign: 'center' }}>1000</h3>
              <p style={{ textAlign: 'center' }}>Confirmed Cases</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className={classes.update}>
        <p>Last Updated on 18 Oktober 2021</p>
      </div>
    </div>
  );
}
