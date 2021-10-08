import Head from 'next/head'

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Not found</title>
      </Head>
      <h1>Uppss.. your destination not found. </h1>
      <h1>Please visit another page</h1>
    </div>
  );
}
