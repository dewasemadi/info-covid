import Head from 'next/head';
import Link from 'next/link';
import { Button, Container } from '@mui/material';

export default function Custom404() {

  return (
    <div>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Container maxWidth="lg" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h3 style={{ textAlign: 'center' }}>Ups.. your destination not found</h3>
          <p style={{ textAlign: 'center' }}>Please try another page</p>
          <Link href="/" passHref >
            <div style={{ display: 'block' }}>
              <Button variant="outlined" style={{ margin: "10px auto auto auto", display: 'block', textTransform: 'capitalize' }}>Back To Home</Button>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
