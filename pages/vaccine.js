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
        <h2 className={classes.title}>Vaccine</h2>
      </Container>
    </div>
  );
}
