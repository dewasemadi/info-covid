import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Container } from "@mui/material";
import styles from "../styles/pages/_offline.module.css";

export default function Offline() {
  const router = useRouter();
  const handleReload = () => {
    router.reload();
  };

  return (
    <div>
      <Head>
        <title>Info Corona</title>
      </Head>
      <Container maxWidth='lg' className={styles.container}>
        <div>
          <h3 className={styles.errorMessage}>Connect to the internet </h3>
          <p className={styles.textCenter}>You're offline. Check your connection</p>
          <Button onClick={handleReload} variant='outlined' className={styles.btnCustom}>
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
