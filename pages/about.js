import Head from "next/head";
import { Container } from "@mui/material";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 style={{ marginTop: "10px", fontWeight: 500, fontSize: "18px" }}>About</h2>
      </Container>
    </div>
  );
}
