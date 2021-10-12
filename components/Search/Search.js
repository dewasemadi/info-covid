import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  FormControl,
  Autocomplete,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useGetProvincesQuery, useGetCitiesByProvinceQuery } from "../../redux/services/bed-rs.service";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import styles from "./Search.style";
const useStyles = makeStyles(styles);

export default function Search() {
  const classes = useStyles();
  const router = useRouter();
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setcity] = useState("");
  const [type, setType] = useState(1);

  let selectedProvince = province ? province.id : "";
  const getProvinces = useGetProvincesQuery("");
  const getCities = useGetCitiesByProvinceQuery(`${selectedProvince}`);

  useEffect(() => {
    if (getProvinces.data) setProvinces(getProvinces.data.provinces);
    if (getCities.data) setCities(getCities.data.cities);
  }, [getProvinces, getCities]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleRoute = () => {
    router.push(`/hospital/list?province_id=${selectedProvince}&city_id=${city.id}&type=${type}`);
  };

  return (
    <Box>
      <p className={classes.formTitle}>Select Your Province</p>
      <Autocomplete
        disablePortal
        id='select-provinces'
        hiddenlabel='true'
        options={provinces}
        getOptionLabel={(provinces) => provinces.name}
        onChange={(_, province) => setProvince(province)}
        noOptionsText={getProvinces.isFetching ? "Please wait..." : "Province not found"}
        className={classes.mAuto}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Provinces...'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {getProvinces.isFetching ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />

      <p className={classes.formTitle}>Select Your City</p>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        hiddenlabel='true'
        options={cities}
        key={getCities.isFetching ? getCities.isFetching : province}
        disabled={!province ? true : getCities.isFetching ? true : false}
        getOptionLabel={(cities) => cities.name}
        onChange={(_, city) => setcity(city)}
        noOptionsText={getCities.isFetching ? "Please wait..." : "City not found"}
        className={classes.mAuto}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Cities...'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {getCities.isFetching ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      <FormHelperText className={classes.helperMargin}>Please select your province first</FormHelperText>

      <FormControl component='fieldset'>
        <p className={classes.bedTypeTitle}>Choose Bed Type</p>
        <RadioGroup row aria-label='gender' name='row-radio-buttons-group' value={type} onChange={handleChange}>
          <FormControlLabel value='1' control={<Radio />} label='Covid-19' />
          <FormControlLabel value='2' control={<Radio />} label='Non Covid-19' />
        </RadioGroup>
      </FormControl>

      <div>
        <Button
          disabled={province && city ? false : true}
          onClick={handleRoute}
          variant='contained'
          disableElevation
          size='large'
          startIcon={<SearchRoundedIcon />}
          className={classes.btnCustom}>
          Search
        </Button>
      </div>
    </Box>
  );
}
