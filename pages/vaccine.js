import Head from "next/head";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/pages/vaccine.style";
const useStyles = makeStyles(styles);

export default function Vaccine() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Vaccine</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className={classes.title}>What is Vaccination?</h2>
        <h2 className={classes.title}>The Goals of Vaccination</h2>
        <h2 className={classes.title}>Kinds of Vaccine</h2>
        <h2 className={classes.title}>How Does a Vaccine Work?</h2>
        <h2 className={classes.title}>Facts & Myths About Vaccine</h2>
      </Container>
    </div>
  );
}
