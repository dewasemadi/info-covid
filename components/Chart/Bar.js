import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useGetDataByProvincesQuery } from "../../redux/services/covid-indonesia.service";
import { Box, Skeleton } from "@mui/material";
import styles from "./Bar.module.css";
import MyTooltip from "../Tooltip/Tooltip";
import { dataSource, options } from "./Configuration";
const format = require("lodash");

export default function BarChart() {
  const { data, error, isLoading } = useGetDataByProvincesQuery("");
  const [provinces, setProvinces] = useState([]);
  const [cases, setCases] = useState([]);
  const [treated, setTreated] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeath] = useState([]);

  useEffect(() => {
    if (data) {
      setProvinces(
        data.map((arg) => {
          const lower = format.toLower(arg.provinsi);
          return format.startCase(lower);
        })
      );
      setCases(data.map((arg) => arg.kasus));
      setTreated(data.map((arg) => arg.dirawat));
      setRecovered(data.map((arg) => arg.sembuh));
      setDeath(data.map((arg) => arg.meninggal));
    }
  }, [data]);

  return (
    <div>
      {error ? (
        <></>
      ) : isLoading ? (
        <Box
          m='auto'
          sx={{
            width: {
              lg: 900,
            },
          }}>
          <div className={styles.container}>
            <h2 className={styles.title}>Statistics by Provinces</h2>
            <MyTooltip place='top' title='Use PC to get better experience in reading charts' className={styles.ml} />
          </div>
          <Skeleton variant='rectangular' animation='wave' height={550} className={styles.mt} />
        </Box>
      ) : data ? (
        <Box
          m='auto'
          sx={{
            width: {
              lg: 900,
            },
          }}>
          <div className={styles.container}>
            <h2 className={styles.title}>Statistics by Provinces</h2>
            <div className={styles.ml}>
              <MyTooltip place='top' title='Use PC to get better experience in reading charts' />
            </div>
          </div>
          <div>
            <Bar data={dataSource(provinces, cases, treated, recovered, death)} options={options} responsive='true' height={550} />
          </div>
        </Box>
      ) : null}
    </div>
  );
}
