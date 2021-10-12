import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Search from "../../components/Search/Search";
import MyTooltip from "../../components/Tooltip/Tooltip";
import { makeStyles } from "@mui/styles";
import styles from "../../styles/pages/hospital.style";
import doctor from "../../public/doctor2.svg";
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
        <Grid container>
          <Grid item xs={12} sm={12} md={5} order={{ xs: 2, md: 1 }}>
            <Search />
          </Grid>
          <Grid item xs={10} sm={8} md={4} style={{ display: "block", margin: "auto" }} order={{ xs: 1, md: 2 }}>
            <div style={{ display: "block !important" }}>
              <Image src={doctor} alt='illustration' width={400} height={400} layout='responsive' />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
