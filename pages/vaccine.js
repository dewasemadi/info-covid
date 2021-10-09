import Head from "next/head";
import { Container } from "@mui/material";
import styles from "../styles/pages/vaccine.module.css";

export default function Vaccine() {
  return (
    <div>
      <Head>
        <title>Vaccine</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className={styles.title}>Vaccine</h2>
      </Container>
    </div>
  );
}
