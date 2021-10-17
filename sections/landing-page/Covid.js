import Image from 'next/image';
import { Grid } from '@mui/material';
import scientist from '../../public/scientist.svg';

export default function Covid() {
  return (
    <Grid container spacing={{ xs: 2, md: 2 }}>
      <Grid item xs={12} sm={12} md={3} style={{ margin: 'auto' }}>
        <div style={{ display: 'block !important' }}>
          <Image src={scientist} alt='illustration' width={200} height={200} layout='responsive' />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={7} style={{ display: 'block', margin: 'auto' }}>
        <h2>What is Covid-19?</h2>
        <p>
          Coronaviruses are a large family of viruses that cause disease in humans and animals. In humans, it usually causes respiratory
          tract infections, ranging from the common cold to serious illnesses such as Middle East Respiratory Syndrome (MERS) and Severe
          Acute Respiratory Syndrome (SARS). A new type of coronavirus found in humans since an extraordinary event appeared in Wuhan,
          China, in December 2019, was later named Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-COV2), and caused Coronavirus
          Disease-2019 (COVID-19).
        </p>
      </Grid>
    </Grid>
  );
}
