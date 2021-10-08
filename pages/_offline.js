import Head from 'next/head'
import { useRouter } from 'next/router';
import { Button, Container } from '@mui/material';

export default function Offline() {
  const router = useRouter();
  const handleReload = () => {
    router.reload();
  }

  return (
    <div >
      <Head>
        <title>Info Corona</title>
      </Head>
      <Container maxWidth="lg" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h3 style={{ textAlign: 'center' }}>Connect to the internet </h3>
          <p style={{ textAlign: 'center' }}>You're offline. Check your connection</p>
          <Button onClick={handleReload} variant="outlined" style={{ margin: "10px auto auto auto", display: 'block', textTransform: 'capitalize' }}>Try Again</Button>
        </div>
      </Container>
    </div >
  )
}