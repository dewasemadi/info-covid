import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Tab, Tabs, Grid, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyCard from "./Card";
import styles from "./Tabs.style";
const useStyles = makeStyles(styles);

import { formatDateToUs } from "../../utils/formatter";
import { useGetIndonesiaVaccineSummaryQuery } from "../../redux/services/vaccine.service";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={matches ? `vertical-tabpanel-${index}` : `simple-tabpanel-${index}`}
      aria-labelledby={matches ? `vertical-tab-${index}` : `simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return {
    id: matches ? `vertical-tab-${index}` : `simple-tab-${index}`,
    "aria-controls": matches ? `vertical-tabpanel-${index}` : `simple-tabpanel-${index}`,
  };
}

export default function MyTabs() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, error, isLoading } = useGetIndonesiaVaccineSummaryQuery("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let idx = "";
  if (data) idx = data.monitoring.length - 1;

  if (data) console.log(data.monitoring[idx]);

  return (
    <div>
      <Grid container spacing={{ sm: 1, md: 2 }}>
        <Grid item xs={12} sm={12} md={7}>
          <p>#AyoVaksinasi</p>
          <h2 className={classes.title}>Progress of Indonesia's Covid-19 Vaccination</h2>
          {data ? <p>Last updated on {formatDateToUs(data.last_updated)} </p> : null}
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <p>ye</p>
        </Grid>
      </Grid>

      <Box sx={matches ? { mt: 3 } : { flexGrow: 1, bgcolor: "background.paper", display: "flex", width: "100%", mt: 3 }}>
        <Tabs
          orientation={matches ? "horizontal" : "vertical"}
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='tabs'>
          <Tab label='Phase 1' {...a11yProps(0)} style={{ textTransform: "capitalize" }} />
          <Tab label='Phase 2' {...a11yProps(1)} style={{ textTransform: "capitalize" }} />
        </Tabs>
        <TabPanel value={value} index={0} style={{ width: "-webkit-fill-available" }}>
          {error ? (
            <p>ye</p>
          ) : isLoading ? (
            <p>loding</p>
          ) : data ? (
            <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
              <Grid item xs={12} sm={6} md={4}>
                <MyCard
                  title='Semua vaksinasi'
                  tahapan={data.monitoring[idx].vaksinasi1}
                  percent={data.monitoring[idx].cakupan.vaksinasi1}
                  target={data.monitoring[idx].total_sasaran_vaksinasi}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MyCard
                  title='Semua vaksinasi'
                  tahapan={data.monitoring[idx].vaksinasi1}
                  percent={data.monitoring[idx].cakupan.vaksinasi1}
                  target={data.monitoring[idx].total_sasaran_vaksinasi}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MyCard
                  title='Semua vaksinasi'
                  tahapan={data.monitoring[idx].vaksinasi1}
                  percent={data.monitoring[idx].cakupan.vaksinasi1}
                  target={data.monitoring[idx].total_sasaran_vaksinasi}
                />
              </Grid>
            </Grid>
          ) : null}
        </TabPanel>
        <TabPanel value={value} index={1} style={{ width: "-webkit-fill-available" }}>
          {error ? (
            <p>ye</p>
          ) : isLoading ? (
            <p>loding</p>
          ) : data ? (
            <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
              <Grid item xs={12} sm={6} md={4}>
                <MyCard
                  title='Semua vaksinasi'
                  tahapan={data.monitoring[idx].vaksinasi1}
                  percent={data.monitoring[idx].cakupan.vaksinasi1}
                  target={data.monitoring[idx].total_sasaran_vaksinasi}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MyCard
                  title='Semua vaksinasi'
                  tahapan={data.monitoring[idx].vaksinasi1}
                  percent={data.monitoring[idx].cakupan.vaksinasi1}
                  target={data.monitoring[idx].total_sasaran_vaksinasi}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MyCard
                  title='Semua vaksinasi'
                  tahapan={data.monitoring[idx].vaksinasi1}
                  percent={data.monitoring[idx].cakupan.vaksinasi1}
                  target={data.monitoring[idx].total_sasaran_vaksinasi}
                />
              </Grid>
            </Grid>
          ) : null}
        </TabPanel>
      </Box>
    </div>
  );
}
