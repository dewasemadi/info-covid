import Head from "next/head";
import Link from "next/link";
import { Button, Container } from "@mui/material";
import styles from "../styles/pages/_404.module.css";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Container maxWidth='lg' className={styles.container}>
        <div>
          <h3 className={styles.errorMessage}>Ups.. your destination not found</h3>
          <p className={styles.textCenter}>Please try another page</p>
          <Link href='/' passHref>
            <div style={{ display: "block" }}>
              <Button variant='outlined' className={styles.btnCustom}>
                Back To Home
              </Button>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
