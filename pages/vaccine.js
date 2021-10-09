import Head from "next/head";
import { Container, Box } from "@mui/material";

export default function Vaccine() {
  return (
    <div>
      <Head>
        <title>Vaccine</title>
      </Head>
      <Container maxWidth='lg'>
        <Box sx={{ height: "100%" }}>
          <h1 style={{ textAlign: "center" }}>Vaccine</h1>
        </Box>
      </Container>
    </div>
  );
}
