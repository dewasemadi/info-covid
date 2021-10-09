import Head from "next/head";
import { Container } from "@mui/material";
import styles from "../styles/pages/about.module.css";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className={styles.title}>About</h2>
      </Container>
    </div>
  );
}
