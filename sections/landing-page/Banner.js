import Image from 'next/image';
import { Grid } from '@mui/material';
import person from '../../public/person.svg';

export default function Banner() {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 2 }} className="textGradient">
        <Grid item xs={12} sm={12} md={5} style={{ margin: 'auto' }}>
          <h2>Corona Virus Info</h2>
          <p>
            The Coronavirus (Covid-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a
            pandemic by the World Health Organization (WHO) on 11 March 2020
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} style={{ display: 'block', margin: 'auto' }}>
          <div style={{ display: 'block !important' }}>
            <Image src={person} alt='illustration' width={200} height={200} layout='responsive' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
