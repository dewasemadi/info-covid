import Head from 'next/head';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../styles/pages/home.style';
import Banner from '../sections/landing-page/Banner';
import Covid from '../sections/landing-page/Covid';
const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Info Covid</title>
      </Head>
      <Container maxWidth='lg'>
        <Banner />
        <Covid />
      </Container>
    </div>
  );
}
