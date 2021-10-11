import { Card, CardContent, Grid, Chip, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./HospitalDetail.style";
const useStyles = makeStyles(styles);

export default function HospitalCard({ data }) {
  const classes = useStyles();
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} style={{ marginTop: "15px" }}>
      {data.bedDetail.map((detail, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card variant='outlined'>
            <CardContent style={{ paddingBottom: "16px" }}>
              <p className={classes.name}>{detail.stats.title}</p>
              <p className={classes.time}>Updated on {detail.time}</p>
              <p>{detail.stats.time}</p>

              <div className={classes.chipContainer}>
                <Chip
                  color={detail.stats.bed_available > 0 ? "success" : "error"}
                  label={`${detail.stats.bed_available} bed available`}
                  style={{ borderRadius: "3px" }}></Chip>

                <Chip
                  color={detail.stats.bed_empty > 0 ? "success" : "error"}
                  label={`${detail.stats.bed_empty} bed empty`}
                  className={classes.secondChip}></Chip>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
