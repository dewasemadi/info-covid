import Head from "next/head";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/pages/home.style";
const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Info Covid</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className={classes.title}>Home</h2>
      </Container>
    </div>
  );
}
