import Head from 'next/head'
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export default function Offline() {
  const router = useRouter();
  const handleReload = () => {
    router.reload();
  }

  return (
    <div>
      <Head>
        <title>Info Corona</title>
      </Head>
      <div style={{ marginTop: '100px' }}>
        <h3 style={{ textAlign: 'center' }}>Connect to the internet </h3>
        <p style={{ textAlign: 'center' }}>You're offline. Check your connection</p>
        <Button onClick={handleReload} variant="outlined" style={{ margin: "10px auto auto auto", display: 'block' }}>Try Again</Button>
      </div>
    </div>
  )
}