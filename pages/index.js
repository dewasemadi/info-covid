import Head from 'next/head';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../styles/pages/home.style';
import Banner from '../sections/landing-page/Banner';
import Covid from '../sections/landing-page/Covid';
import GlobalSummary from '../sections/landing-page/Summary';
import Symptoms from '../sections/landing-page/Symptoms';
import Prevention from '../sections/landing-page/Prevention';
const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Info Covid</title>
      </Head>
      <Container maxWidth="lg">
        <Banner />
        <GlobalSummary />
        <Covid />
        <Symptoms />
        <Prevention />
      </Container>
    </div>
  );
}
