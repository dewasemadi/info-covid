import link from "next/link";
import { Grid, Container, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from './Footer.style';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles(styles);

export default function Footer() {
const classes = useStyles();
    return (
       <div>
            <footer className={classes.footer}>
                <Container>
                    <Grid container spacing = {12}>
                        <Grid item xs={4}>
                            <h1>Corona</h1>
                            <br/>
                            <p style={{textAlign:'left'}}>This website is for health information and advice about coronavirus (COVID-19), 
                                how to prevent and prevent yourself from the disease</p>
                            <div>
                                <Link href="#" style={{color:'#FFFFFF'}}><FacebookIcon/></Link>
                                <Link href="#" style={{color:'#FFFFFF'}}><TwitterIcon/></Link>
                                <Link href="#" style={{color:'#FFFFFF'}}><InstagramIcon/></Link>
                                <Link href="#" style={{color:'#FFFFFF'}}><LinkedInIcon/></Link>
                            </div>
                            <br></br>
                        </Grid>
                        <Grid item xs={4}>
                            <h1>Menu</h1>
                            <br/>
                            <ul>
                                <li className={classes.link}><Link href="#" style={{color:'#FFFFFF'}}>Statistics</Link></li>
                                <li className={classes.link}><Link href="#" style={{color:'#FFFFFF'}}>Vaccine</Link></li>
                                <li className={classes.link}><Link href="#" style={{color:'#FFFFFF'}}>Hospital Check</Link></li>
                                <li className={classes.link}><Link href="#" style={{color:'#FFFFFF'}}>About Us</Link></li>
                            </ul>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                <div>
                                    <h1>Alamat</h1>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <br/>
                                <div>
                                    <h1>Github</h1>
                                    <Link style={{color:'#FFFFFF'}} href="#">Info-Covid</Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
            <footer className={classes.footerBottom}>
                <Container>
                    <Grid container spacing = {3}>
                        <Grid item xs={12}>
                            <p>
                                &copy;2021 Copyright All Rights Reserved
                            </p>
                            <br/>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
       </div>
    )
}