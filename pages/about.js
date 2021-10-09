import Head from "next/head";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/pages/about.style";
const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className={classes.title}>About</h2>
      </Container>
    </div>
  );
}
