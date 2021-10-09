import Head from "next/head";
import { useRouter } from "next/router";
import { useGetBedDetailByHospitalQuery } from "../../redux/services/bed-rs.service";
import { Button, Skeleton, Card, CardContent, Grid, Container, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../../styles/pages/hospital.style";
const useStyles = makeStyles(styles);

export default function Detail() {
  const classes = useStyles();
  const router = useRouter();
  const { hospital_id, type } = router.query;
  const { data, error, isLoading } = useGetBedDetailByHospitalQuery({ hospital_id, type });

  const handleReload = () => {
    router.reload();
  };

  if (data) console.log(data);

  return (
    <div>
      <Head>
        <title>Detail Class Category</title>
      </Head>
      <Container maxWidth='lg'>
        <div>
          {error ? (
            <div className={classes.errorMessageContainer}>
              <div>
                <p className={classes.errorMessage}>Oops.. Something went wrong. Failed to get data, please try again.</p>
                <Button onClick={handleReload} variant='outlined' className={classes.btnCustom}>
                  Try Again
                </Button>
              </div>
            </div>
          ) : isLoading ? (
            <CircularProgress />
          ) : data ? (
            <div>
              <p>{data.data.name}</p>
              <p>{data.data.address}</p>
              <p>{data.data.phone}</p>
              {data.data.bedDetail.map((detail, idx) => (
                <div key={idx} style={{ margin: "30px 0" }}>
                  <p>{detail.stats.title}</p>
                  <p>{detail.stats.time}</p>
                  <p>bed yang tersedia: {detail.stats.bed_available}</p>
                  <p>bed kosong: {detail.stats.bed_empty}</p>
                  <p>antrian: {detail.stats.queue}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
