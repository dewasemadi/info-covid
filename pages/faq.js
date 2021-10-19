import Head from 'next/head';
import { Container } from '@mui/material';
import MyFaq from '../components/Accordion/Accordion';
import { makeStyles } from '@mui/styles';
import styles from '../styles/pages/faq.style';
const useStyles = makeStyles(styles);

export default function Faq() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className="title textGradient" style={{fontSize: "30px"}}>Frequently Asked Questions</h2>
        <MyFaq />
      </Container>
    </div>
  );
}
