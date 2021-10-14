import MyCard from "./Card";
import { useState } from "react";
import TabPanel from "./TabPanel";
import styles from "./Tabs.style";
import { useRouter } from "next/router";
import { A11yProps } from "./A11yProps";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { formatDateToUs, formattingNumber } from "../../utils/formatter";
import { Box, Tab, Tabs, Grid, Card, CardContent, Skeleton, Typography, Button } from "@mui/material";
import { useGetIndonesiaVaccineSummaryQuery } from "../../redux/services/vaccine.service";
import MySkeleton from "./Skeleton";
const useStyles = makeStyles(styles);

export default function MyTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState(0);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, error, isLoading } = useGetIndonesiaVaccineSummaryQuery("");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleReload = () => {
    router.reload();
  };

  let idx = "";
  let vaccine1 = "";
  let vaccine2 = "";
  let updatedData = [];

  if (data) {
    idx = data.monitoring.length - 1;
    updatedData = data.monitoring[idx];

    vaccine1 = [
      {
        title: "All Vaccination Phase 1",
        tahapan: updatedData.vaksinasi1,
        target: updatedData.total_sasaran_vaksinasi,
      },
      {
        title: "Elderly",
        tahapan: updatedData.tahapan_vaksinasi.lansia.sudah_vaksin1,
        target: updatedData.sasaran_vaksinasi_lansia,
      },
      {
        title: "Public Officer",
        tahapan: updatedData.tahapan_vaksinasi.petugas_publik.sudah_vaksin1,
        target: updatedData.sasaran_vaksinasi_petugas_publik,
      },
      {
        title: "General Public",
        tahapan: updatedData.tahapan_vaksinasi.masyarakat_umum.sudah_vaksin1,
        target: updatedData.sasaran_vaksinasi_masyarakat_umum,
      },
      {
        title: "Health Workers",
        tahapan: updatedData.tahapan_vaksinasi.sdm_kesehatan.sudah_vaksin1,
        target: updatedData.sasaran_vaksinasi_sdmk,
      },
      {
        title: "Age Group 12-17",
        tahapan: updatedData.tahapan_vaksinasi.kelompok_usia_12_17.sudah_vaksin1,
        target: updatedData.sasaran_vaksinasi_kelompok_1217,
      },
    ];

    vaccine2 = [
      {
        title: "All Vaccination Phase 2",
        tahapan: updatedData.vaksinasi2,
        target: updatedData.total_sasaran_vaksinasi,
      },
      {
        title: "Elderly",
        tahapan: updatedData.tahapan_vaksinasi.lansia.sudah_vaksin2,
        target: updatedData.sasaran_vaksinasi_lansia,
      },
      {
        title: "Public Officer",
        tahapan: updatedData.tahapan_vaksinasi.petugas_publik.sudah_vaksin2,
        target: updatedData.sasaran_vaksinasi_petugas_publik,
      },
      {
        title: "General Public",
        tahapan: updatedData.tahapan_vaksinasi.masyarakat_umum.sudah_vaksin2,
        target: updatedData.sasaran_vaksinasi_masyarakat_umum,
      },
      {
        title: "Health Workers",
        tahapan: updatedData.tahapan_vaksinasi.sdm_kesehatan.sudah_vaksin2,
        target: updatedData.sasaran_vaksinasi_sdmk,
      },
      {
        title: "Age Group 12-17",
        tahapan: updatedData.tahapan_vaksinasi.kelompok_usia_12_17.sudah_vaksin2,
        target: updatedData.sasaran_vaksinasi_kelompok_1217,
      },
    ];
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <Grid container spacing={{ sm: 1, md: 2 }}>
        <Grid item xs={12} sm={12} md={7} style={{ marginBottom: "20px" }}>
          <p>#AYOVAKSINASI</p>
          <h2 className={classes.title}>Progress of Indonesia's Covid-19 Vaccination</h2>
          {error ? (
            <p>Last Updated on -</p>
          ) : isLoading ? (
            <Skeleton variant='text' animation='wave' width={matches ? "" : 300} />
          ) : data ? (
            <p>Last updated on {formatDateToUs(data.last_updated)} </p>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Card variant='outlined'>
            <CardContent className={classes.cardContainer}>
              {error ? (
                <div>
                  <p className={classes.title2}>Total Vaccination Target</p>
                  <h3 style={{ fontSize: "20px" }}>-</h3>
                </div>
              ) : isLoading ? (
                <div>
                  <p className={classes.title2}>Total Vaccination Target</p>
                  <Typography variant='h4'>
                    <Skeleton variant='text' animation='wave' />
                  </Typography>
                </div>
              ) : data ? (
                <div>
                  <p className={classes.title2}>Total Vaccination Target</p>
                  <h3 style={{ fontSize: "20px" }}>{formattingNumber(updatedData.total_sasaran_vaksinasi)}</h3>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={matches ? { mt: 3 } : { flexGrow: 1, bgcolor: "background.paper", display: "flex", width: "100%", mt: 3 }}>
        <Tabs
          orientation={matches ? "horizontal" : "vertical"}
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='tabs'
          className={classes.tabStyle}>
          <Tab label='Phase 1' {...A11yProps(0)} className={classes.btnCustom} />
          <Tab label='Phase 2' {...A11yProps(1)} className={classes.btnCustom} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.tabPanelContainer}>
          {error ? (
            <p>Oops.. Something went wrong. Failed to get data, please try again.</p>
          ) : isLoading ? (
            <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
              {[...Array(6)].map((_, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <MySkeleton />
                </Grid>
              ))}
            </Grid>
          ) : data ? (
            <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
              {vaccine1.map(({ title, tahapan, percent, target }, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <MyCard title={title} tahapan={tahapan} percent={percent} target={target} />
                </Grid>
              ))}
            </Grid>
          ) : null}
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanelContainer}>
          {error ? (
            <p>Oops.. Something went wrong. Failed to get data, please try again.</p>
          ) : isLoading ? (
            <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
              {[...Array(6)].map((_, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <MySkeleton />
                </Grid>
              ))}
            </Grid>
          ) : data ? (
            <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
              {vaccine2.map(({ title, tahapan, percent, target }, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <MyCard title={title} tahapan={tahapan} percent={percent} target={target} />
                </Grid>
              ))}
            </Grid>
          ) : null}
        </TabPanel>
      </Box>
    </div>
  );
}
