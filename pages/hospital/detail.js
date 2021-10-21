import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import HospitalCard from '../../components/Card/HospitalDetail';
import { useGetBedDetailByHospitalQuery, useGetHospitalMapQuery } from '../../redux/services/bed-rs.service';
import { Button, Container, CircularProgress, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../../styles/pages/hospital.style';
import { isContainAlphabet } from '../../utils/validator';
const useStyles = makeStyles(styles);
import { useState, useEffect } from 'react';

const Map = dynamic(import('../../components/Map/Map'), {
  ssr: false,
});

export default function Detail() {
  const classes = useStyles();
  const router = useRouter();
  const [name, setName] = useState('');
  const [map, setMap] = useState('');
  const { hospital_id, type } = router.query;
  const { data, error, isLoading } = useGetBedDetailByHospitalQuery({ hospital_id, type });
  const getMap = useGetHospitalMapQuery(`${hospital_id}`);

  const handleReload = () => {
    router.reload();
  };

  useEffect(() => {
    if (data) setName(data.data.name);
    if (getMap) setMap(getMap.data);
  }, [data, getMap]);

  return (
    <div>
      <Head>
        <title>{name ? name : 'Hospital'} Detail</title>
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
          ) : data && map ? (
            <div>
              {!isContainAlphabet(map.data.lat) ? (
                <Map lat={map.data.lat} long={map.data.long} name={data.data.name} phone={data.data.phone} address={data.data.address} />
              ) : (
                <p style={{ textAlign: 'center', marginTop: '50px' }}>Ups.. Something went wrong</p>
              )}
              {data.data.bedDetail.length > 0 && (
                <h3 style={{ marginTop: '20px', marginBottom: '-10px' }}>Result ({`${data.data.bedDetail.length} Bed Type`})</h3>
              )}
              <HospitalCard data={data.data} />
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
