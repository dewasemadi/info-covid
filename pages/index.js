import Head from 'next/head';
import BarChart from '../components/Chart/Bar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Info Covid</title>
        <meta name="description" content="Info Covid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BarChart />
    </div>
  );
}
