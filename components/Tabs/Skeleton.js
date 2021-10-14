import styles from "./Tabs.style";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";
const useStyles = makeStyles(styles);

export default function MySkeleton() {
  const classes = useStyles();
  return (
    <div>
      <Card variant='outlined'>
        <CardContent className={classes.cardContainer}>
          <Skeleton variant='text' animation='wave' />
          <Typography variant='h4'>
            <Skeleton variant='text' animation='wave' />
          </Typography>
          <Skeleton variant='text' animation='wave' />
          <Skeleton variant='text' animation='wave' style={{ marginTop: "20px" }} />
          <Skeleton variant='text' animation='wave' />
        </CardContent>
      </Card>
    </div>
  );
}
