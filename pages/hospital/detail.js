import Head from "next/head";
import { useRouter } from "next/router";
import HospitalCard from "../../components/Card/HospitalDetail";
import { useGetBedDetailByHospitalQuery } from "../../redux/services/bed-rs.service";
import { Button, Container, CircularProgress, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../../styles/pages/hospital.style";
const useStyles = makeStyles(styles);
import { useState, useEffect } from "react";

export default function Detail() {
  const classes = useStyles();
  const router = useRouter();
  const { hospital_id, type } = router.query;
  const { data, error, isLoading } = useGetBedDetailByHospitalQuery({ hospital_id, type });
  const [name, setName] = useState("");

  const handleReload = () => {
    router.reload();
  };

  useEffect(() => {
    if (data) setName(data.data.name);
  }, [data]);

  return (
    <div>
      <Head>
        <title>{name ? name : "hospital"} Detail</title>
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
            <Stack direction='row' justifyContent='center' alignItems='center' className={classes.errorMessageContainer}>
              <CircularProgress />
            </Stack>
          ) : data ? (
            <HospitalCard data={data.data} />
          ) : null}
        </div>
      </Container>
    </div>
  );
}
