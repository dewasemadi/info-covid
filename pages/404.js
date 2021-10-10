import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/pages/_404.style";
import Error from "../public/404.svg";
const useStyles = makeStyles(styles);

export default function Custom404() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Container maxWidth='lg' className={classes.container}>
        <div>
          <Image src={Error} alt='404 not found' width={300} height={300} />
          <h3 className={classes.errorMessage}>Oops.. your destination not found</h3>
          <p className={classes.textCenter}>Please try another page</p>
          <Link href='/' passHref>
            <div style={{ display: "block" }}>
              <Button variant='outlined' className={classes.btnCustom}>
                Go to homepage
              </Button>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
