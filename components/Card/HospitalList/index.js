import Link from "next/link";
import Image from "next/image";
import MyChip from "../../Chip/Chip";
import { useRouter } from "next/router";
import doctor from "../../../public/doctor.svg";
import { Card, CardContent, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import styles from "./HospitalList.style";
const useStyles = makeStyles(styles);

export default function HospitalList({ data, type }) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div>
      {Array.isArray(data) && data.length ? (
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, lg: 12 }} className={classes.mt5}>
          {data.map((hospital, idx) => (
            <Grid item xs={12} sm={4} md={4} key={idx}>
              <Card variant='outlined'>
                <CardContent style={{ paddingBottom: "16px" }}>
                  <Grid container spacing={{ xs: 1, md: 3 }}>
                    <Grid item xs={12} sm={12} md={4} lg={7}>
                      <h2 className={classes.title}>{hospital.name}</h2>
                      <div className={classes.container}>
                        <LocationOnRoundedIcon sx={{ fontSize: 17, mr: 1 }} className={classes.icon} />
                        <p className={classes.address}>{hospital.address}</p>
                      </div>
                      <Link href={`tel:${hospital.phone}`} passHref>
                        <div className={classes.container}>
                          <PhoneRoundedIcon sx={{ fontSize: 17, mr: 1 }} className={classes.icon} />
                          <p className={classes.phone}>{hospital.phone ? hospital.phone : "No phone number"}</p>
                        </div>
                      </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={5} className={classes.availability}>
                      <MyChip length={hospital.bed_availability} />
                      <p className={classes.update}>{hospital.info}</p>
                    </Grid>
                  </Grid>

                  <Button
                    size='medium'
                    className={classes.btnCustom}
                    endIcon={<ArrowForwardRoundedIcon size='medium' />}
                    onClick={() => router.push(`/hospital/detail?hospital_id=${hospital.id}&type=${type}`)}>
                    Detail
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className={classes.errorMessageContainer}>
          <div>
            <Image src={doctor} alt='hospital not found' width={350} height={250} />
            <p className={classes.textCenter}>Oops.. Hospital not found</p>
          </div>
        </div>
      )}
    </div>
  );
}
