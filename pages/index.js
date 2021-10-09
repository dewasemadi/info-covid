import Head from "next/head";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Info Covid</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 style={{ marginTop: "10px", fontWeight: 500, fontSize: "18px" }}>Home</h2>
      </Container>
    </div>
  );
}
