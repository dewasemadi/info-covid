import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/pages/_offline.style";
const useStyles = makeStyles(styles);

export default function Offline() {
  const classes = useStyles();
  const router = useRouter();
  const handleReload = () => {
    router.reload();
  };

  return (
    <div>
      <Head>
        <title>Info Corona</title>
      </Head>
      <Container maxWidth='lg' className={classes.container}>
        <div>
          <h3 className={classes.errorMessage}>Connect to the internet </h3>
          <p className={classes.textCenter}>You're offline. Check your connection</p>
          <Button onClick={handleReload} variant='outlined' className={classes.btnCustom}>
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
