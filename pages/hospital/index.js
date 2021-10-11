import Head from "next/head";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import Search from "../../components/Search/Search";
import MyTooltip from "../../components/Tooltip/Tooltip";
import { makeStyles } from "@mui/styles";
import styles from "../../styles/pages/hospital.style";
const useStyles = makeStyles(styles);

export default function Hospital() {
  const classes = useStyles();
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
          <div className={classes.titleContainer}>
            <h2 className={classes.title}>Hospital Bed Availability</h2>
            <div className={classes.ml}>
              <MyTooltip place='bottom' title='There may be misinformation because the data center changes frequently' />
            </div>
          </div>
        </Box>
        <Search />
      </Container>
    </div>
  );
}
