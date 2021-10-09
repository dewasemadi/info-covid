import Head from "next/head";
import { Container, Box } from "@mui/material";

export default function Vaccine() {
  return (
    <div>
      <Head>
        <title>Vaccine</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 style={{ marginTop: "10px", fontWeight: 500, fontSize: "18px" }}>About</h2>
      </Container>
    </div>
  );
}
