import Head from "next/head";
import { Container } from "@mui/material";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Info Covid</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className={styles.title}>Home</h2>
      </Container>
    </div>
  );
}
