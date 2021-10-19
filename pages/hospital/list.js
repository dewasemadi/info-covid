import Head from 'next/head';
import { useRouter } from 'next/router';
import HospitalCard from '../../components/Card/HospitalList';
import { useGetHospitalQuery } from '../../redux/services/bed-rs.service';
import { Button, Container, CircularProgress, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../../styles/pages/hospital.style';
const useStyles = makeStyles(styles);

export default function List() {
  const classes = useStyles();
  const router = useRouter();
  const { province_id, city_id, type } = router.query;
  const { data, error, isLoading } = useGetHospitalQuery({ province_id, city_id, type });

  const handleReload = () => {
    router.reload();
  };

  return (
    <div>
      <Head>
        <title>List of Hospital</title>
      </Head>
      <Container maxWidth="lg">
        <div>
          {error ? (
            <div className={classes.errorMessageContainer}>
              <div>
                <p className={classes.errorMessage}>Oops.. Something went wrong. Failed to get data, please try again.</p>
                <Button onClick={handleReload} variant="outlined" className={classes.btnCustom}>
                  Try Again
                </Button>
              </div>
            </div>
          ) : isLoading ? (
            <Stack direction="row" justifyContent="center" alignItems="center" className={classes.errorMessageContainer}>
              <CircularProgress />
            </Stack>
          ) : data ? (
            <div>
              <h3>Result ({`${data.hospitals.length} Hospitals`})</h3>
              <HospitalCard list={data.hospitals} type={type} />
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
