import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent } from '@mui/material';
import styles from '../../styles/pages/home.style';
const useStyles = makeStyles(styles);

const content = [
  { title: 'Wash Hands', image: '/washHands.png' },
  { title: 'Keep Distance', image: '/keepDistance.png' },
  { title: 'Use Soap', image: '/useSoap.png' },
  { title: 'Stay at Home', image: '/stayAtHome.png' },
  { title: 'Wear Mask', image: '/wearMask.png' },
  { title: 'Avoid Crowds', image: '/avoidCrowds.png' },
  { title: 'Use Gel', image: '/useGel.png' },
  { title: 'Use Gloves', image: '/useGloves.png' },
];

export default function Prevention() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: '100px' }}>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={12} sm={12} md={4} style={{ margin: 'auto' }}>
          <h2 className={classes.title5}>Corona Virus Prevention</h2>
          <p className={classes.desc}>Lorem ipsum dolor sit amet consertum</p>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container spacing={{ xs: 2, md: 2 }}>
            {content.map(({ title, image }, idx) => (
              <Grid item xs={6} sm={6} md={3} key={idx} style={{ margin: 'auto' }}>
                <img src={image} className={classes.img} alt={title} />
                <h2 style={{ fontSize: '16px', fontWeight: 400, textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>{title}</h2>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
