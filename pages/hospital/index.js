import Head from "next/head";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import Search from "../../components/Search/Search";
import MyTooltip from "../../components/Tooltip/Tooltip";
import styles from "../../styles/pages/hospital.module.css";

export default function Hospital() {
  return (
    <div>
      <Head>
        <title>Hospital</title>
      </Head>
      <Container maxWidth='lg'>
        <Box
          sx={{
            width: {
              md: 500,
            },
          }}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Hospital Bed Availability</h2>
            <div className={styles.ml}>
              <MyTooltip place='bottom' title='The data displayed may be an error because the data center changes frequently' />
            </div>
          </div>
        </Box>
        <Search />
      </Container>
    </div>
  );
}
