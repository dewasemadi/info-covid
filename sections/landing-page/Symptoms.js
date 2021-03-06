import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent } from '@mui/material';
import styles from '../../styles/pages/home.style';
const useStyles = makeStyles(styles);

const content = [
  { title: 'High Fever', desc: 'Most Common Symptoms', image: '/highFever.png' },
  { title: 'Cough', desc: 'Most Common Symptomps', image: '/cough.svg' },
  { title: 'Sore Throat', desc: 'Less Common Symptoms', image: '/soreThroat.svg' },
  { title: 'Trouble Breath', desc: 'Serious Symptomps', image: '/troubleThroat.svg' },
];

export default function Symptoms() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: '80px' }}>
      <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Corona Virus Symptoms</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>Below are Some of Corona Virus Symptoms</p>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        {content.map(({ title, desc, image }, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card className={classes.shadow}>
              <CardContent style={{ paddingBottom: '16px' }}>
                <img src={image} className={classes.img} alt={title} />
                <h2 style={{ fontSize: '16px', textAlign: 'center', marginTop: '15px' }}>{title}</h2>
                <p style={{ textAlign: 'center' }}>{desc}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
