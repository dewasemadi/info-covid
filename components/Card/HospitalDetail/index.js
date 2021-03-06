import { Card, CardContent, Grid, Chip, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import UpdateIcon from '@mui/icons-material/Update';
import styles from './HospitalDetail.style';
const useStyles = makeStyles(styles);

export default function HospitalCard({ data }) {
  const classes = useStyles();
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} style={{ marginTop: '15px' }}>
      {data.bedDetail.map((detail, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card className={classes.cardShadow}>
            <CardContent style={{ paddingBottom: '16px' }}>
              <p className={classes.name}>{detail.stats.title}</p>
              <Box sx={{ display: 'flex' }}>
                <UpdateIcon className={classes.icon} sx={{ fontSize: 19, mr: 1 }} />
                <p className={classes.time}>Last updated on {detail.time}</p>
              </Box>

              <div className={classes.chipContainer}>
                <Chip
                  color={detail.stats.bed_available > 0 ? 'success' : 'error'}
                  label={`${detail.stats.bed_available} bed available`}
                  style={{ borderRadius: '3px' }}
                ></Chip>

                <Chip
                  color={detail.stats.bed_empty > 0 ? 'success' : 'error'}
                  label={`${detail.stats.bed_empty} bed empty`}
                  className={classes.secondChip}
                ></Chip>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
