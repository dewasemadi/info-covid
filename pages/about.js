import Head from "next/head";
import Member from "../components/Member/Member";
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
        <h2 className={classes.title}>About Us</h2>
        <br></br>
        <Member />
      </Container>
    </div>
  );
}
