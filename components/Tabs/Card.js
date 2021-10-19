import styles from './Tabs.style';
import { makeStyles } from '@mui/styles';
import { formattingNumber } from '../../utils/formatter';
import { Card, CardContent, LinearProgress } from '@mui/material';
const useStyles = makeStyles(styles);

export default function MyCard({ title, tahapan, target }) {
  const classes = useStyles();

  let value = (tahapan / target) * 100;
  let value2 = (tahapan / target) * 100;
  if (value >= 100) value = 100;

  const setColor = (value) => {
    if (value === 100) return 'success';
    else if (value >= 50) return 'warning';
    else return 'error';
  };

  return (
    <div>
      <Card className={classes.container}>
        <CardContent className={classes.cardContainer}>
          <p className={classes.title2}>{title}</p>
          <h3 style={{ fontSize: '20px' }}>{formattingNumber(tahapan)}</h3>
          <p className={classes.dosis}>Dosage has been given</p>
          <LinearProgress variant="determinate" color={setColor(value)} value={value} style={{ marginTop: '20px' }} />
          <p className={classes.desc}>
            {value2.toFixed(2)}% of {formattingNumber(target)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
