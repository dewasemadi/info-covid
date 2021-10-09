import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGetHospitalQuery } from "../../redux/services/bed-rs.service";
import { Skeleton, Card, CardContent, Button, Grid, Container, CircularProgress } from "@mui/material";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import styles from "../../styles/pages/hospital.module.css";

export default function Bed() {
  const router = useRouter();
  const { province_id, city_id, type } = router.query;
  const { data, error, isLoading } = useGetHospitalQuery({ province_id, city_id, type });

  const handleReload = () => {
    router.reload();
  };

  if (data) console.log(data);

  return (
    <div>
      <Head>
        <title>Class Category</title>
      </Head>
      <Container maxWidth='lg'>
        <div>
          {error ? (
            <div className={styles.errorMessageContainer}>
              <div>
                <p className={styles.errorMessage}>Oops.. Something went wrong. Failed to get data, please try again.</p>
                <Button onClick={handleReload} variant='outlined' className={styles.btnCustom}>
                  Try Again
                </Button>
              </div>
            </div>
          ) : isLoading ? (
            <CircularProgress />
          ) : data ? (
            <>
              {Array.isArray(data.hospitals) && data.hospitals.length ? (
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, lg: 12 }} style={{ marginTop: "5px" }}>
                  {data.hospitals.map((hospital, idx) => (
                    <Grid item xs={12} sm={4} md={4} key={idx}>
                      <Card variant='outlined'>
                        <CardContent style={{ paddingBottom: "16px" }}>
                          <p>{hospital.name}</p>
                          <p>{hospital.address}</p>
                          <p>{hospital.info}</p>
                          <p>{hospital.phone}</p>
                          <p>Antrian: {hospital.queue}</p>
                          <p>Tersedia {hospital.bed_availability} Kategori Kelas </p>
                          <Button onClick={() => router.push(`/hospital/detail?hospital_id=${hospital.id}&type=${type}`)}>Detail</Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <div className={styles.errorMessageContainer}>
                  <p>Oops.. Hospital not found</p>
                </div>
              )}
            </>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
