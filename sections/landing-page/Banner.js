import Image from 'next/image';
import { Grid } from '@mui/material';
import person from '../../public/person.svg';

export default function Banner() {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={12} sm={12} md={6} style={{ margin: 'auto 0' }} order={{ xs: 2, sm: 1 }}>
          <h1>Together we can</h1>
          <div style={{ display: 'flex' }}>
            <h1>fight</h1>
            <h1 style={{ marginLeft: '10px', color: '#0093e9' }}>covid-19</h1>
          </div>
          <p style={{ marginTop: '10px' }}>
            The Coronavirus (Covid-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a
            pandemic by the World Health Organization (WHO) on 11 March 2020
          </p>
        </Grid>
        <Grid item xs={10} sm={6} md={4} style={{ display: 'block', margin: 'auto' }} order={{ xs: 1, sm: 2 }}>
          <div style={{ display: 'block !important' }}>
            <Image src={person} alt="illustration" width={200} height={200} layout="responsive" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
