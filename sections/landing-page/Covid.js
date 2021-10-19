import Image from 'next/image';
import { Grid } from '@mui/material';
import scientist from '../../public/scientist.svg';
import { makeStyles } from '@mui/styles';
import styles from '../../styles/pages/home.style';
const useStyles = makeStyles(styles);

export default function Covid() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: '100px' }}>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={9} sm={5} md={3} style={{ margin: 'auto' }}>
          <div style={{ display: 'block !important' }}>
            <Image src={scientist} alt='illustration' width={200} height={200} layout='responsive' />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={7} style={{ display: 'block', margin: 'auto' }}>
          <h2 className={classes.title3}>What is Covid-19?</h2>
          <p style={{ marginTop: '10px' }}>
            Coronaviruses are a large family of viruses that cause disease in humans and animals. In humans, it usually causes respiratory
            tract infections, ranging from the common cold to serious illnesses such as Middle East Respiratory Syndrome (MERS) and Severe
            Acute Respiratory Syndrome (SARS).
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
