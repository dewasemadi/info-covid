import Head from 'next/head';
import BarChart from '../components/Chart/Bar';
import Summary from '../components/Summary/Summary';
import { Container } from '@mui/material';

export default function Statistics() {
  return (
    <div>
      <Head>
        <title>Statistics</title>
      </Head>
      <Container maxWidth='lg'>
        <Summary />
        <BarChart />
      </Container>
    </div>
  );
}
