import Link from "next/link";
import { Box, Grid, Container, Stack, Tooltip } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import styles from "./Member.style";
const useStyles = makeStyles(styles);

export default function Member() {
    const classes = useStyles();
    return (
        <Box className={classes.boxMargin}>
            <Container maxWidth='lg' style={{ display:'flex', justifyContent:'center' }}>
                <Grid container spacing={{ xs: 1, md: 4 }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="./exp.png"
                                alt="Ris"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Faris Ilham Noormandiri
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    As Support
                                </Typography>
                            </CardContent>
                            <CardActions>
                               Baik Hati & Tidak Sombong
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 1, md: 4 }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="./exp.png"
                                alt="Putu"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    I Dewa Putu Semadi
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    As Hard Carry
                                </Typography>
                            </CardContent>
                            <CardActions>
                                Tampan & Pemberani
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 1, md: 4 }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="./exp.png"
                                alt="Tio"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Tio Ramadhan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    As Mage
                                </Typography>
                            </CardContent>
                            <CardActions>
                               Rupawan & Cekatan
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}