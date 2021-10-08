import Head from 'next/head';
import { Container, Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useGetProvincesQuery, useGetCitiesByProvinceQuery } from '../redux/services/bed-rs.service';
import { useState, useEffect } from 'react';

export default function Hospital() {
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setcity] = useState('');

  let selected = province ? province.id : '';
  const getProvinces = useGetProvincesQuery('');
  const getCities = useGetCitiesByProvinceQuery(`${selected}`);

  useEffect(() => {
    if (getProvinces.data) setProvinces(getProvinces.data.provinces);
    if (getCities.data) setCities(getCities.data.cities);
  }, [getProvinces, getCities]);

  console.log(`${province.name} : ${city.name}`);

  return (
    <div>
      <Head>
        <title>Hospital</title>
      </Head>
      <Container maxWidth="lg">
        <h1 style={{ textAlign: 'center' }}>Hospital Bed Availability</h1>

        <p>Select Your Provinces</p>
        <Autocomplete
          disablePortal
          id="select-provinces"
          hiddenlabel="true"
          options={provinces}
          getOptionLabel={(provinces) => provinces.name}
          onChange={(_, province) => setProvince(province)}
          noOptionsText={'Province not found'}
          sx={{ width: 300 }}
          renderInput={(params) =>
            <TextField
              {...params}
              placeholder="Provinces..."
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {getProvinces.isFetching ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          }
        />

        <p>Select Your City</p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          hiddenlabel="true"
          options={cities}
          key={getCities.isFetching ? getCities.isFetching : province}
          disabled={!province ? true : getCities.isFetching ? true : false}
          getOptionLabel={(cities) => cities.name}
          onChange={(_, city) => setcity(city)}
          noOptionsText={'City not found'}
          sx={{ width: 300 }}
          renderInput={(params) =>
            <TextField
              {...params}
              placeholder="Cities..."
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {getCities.isFetching ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          }
        />

      </Container>
    </div>
  )
}
