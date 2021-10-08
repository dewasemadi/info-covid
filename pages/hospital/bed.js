import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useGetHospitalQuery, } from '../../redux/services/bed-rs.service';
import { Skeleton, Card, CardContent, Button, Grid, Container, CircularProgress } from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

export default function Bed() {
  const router = useRouter();
  const { province_id, city_id, type } = router.query;
  const { data, error, isLoading } = useGetHospitalQuery({ province_id, city_id, type });

  const handleReload = () => {
    router.reload();
  }

  return (
    <div>
      <Head>
        <title>Class Category</title>
      </Head>
      <Container maxWidth="lg">
        <Button onClick={() => router.back()} size="normal" startIcon={<ArrowBackTwoToneIcon />} style={{ textTransform: 'capitalize' }}>Back</Button>
        <div>
          {
            error ? (
              <div style={{ height: '100vh', display: 'flex', marginTop: '-64px', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                  <p style={{ textAlign: 'center', marginTop: '10px' }}>Oops.. Something went wrong. Failed to get data, please try again.</p>
                  <Button onClick={handleReload} variant="outlined" style={{ margin: "10px auto auto auto", display: 'block', textTransform: 'capitalize' }}>Try Again</Button>
                </div>
              </div>
            ) : isLoading ? (
              <CircularProgress />
            ) : data ? (
              <>
                {
                  Array.isArray(data.hospitals) && data.hospitals.length ?
                    (
                      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, lg: 12 }} style={{ marginTop: '5px' }}>
                        {
                          data.hospitals.map((hospital, idx) => (
                            <Grid item xs={12} sm={4} md={4} key={idx}>
                              <Card variant="outlined" >
                                <CardContent style={{ paddingBottom: '16px' }}>
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
                          ))
                        }
                      </Grid>
                    ) : (
                      <div style={{ height: '100vh', display: 'flex', marginTop: '-64px', justifyContent: 'center', alignItems: 'center' }}>
                        <p>Upps.. Hospital not found</p>
                      </div>
                    )
                }
              </>
            ) : null
          }
        </div>
      </Container>
    </div>
  )
}