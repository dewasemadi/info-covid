import Link from 'next/link';
import Image from 'next/image';
import { Box, Grid, Container, Stack, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { makeStyles } from '@mui/styles';
import styles from './Footer.style';
import logo from '../../public/logo.png';
const useStyles = makeStyles(styles);

const navLinks1 = [
  { title: `Statistics`, path: '/statistics' },
  { title: `Vaccine`, path: '/vaccine' },
];

const navLinks2 = [
  { title: `Hospital`, path: '/hospital' },
  { title: `FAQ`, path: '/faq' },
];

export default function Footer() {
  const classes = useStyles();

  const socialMedia = [
    { title: 'Twitter', path: '/', icon: <TwitterIcon className={classes.grey} /> },
    { title: 'Instagram', path: '/', icon: <InstagramIcon className={classes.grey} /> },
    { title: 'Linkedin', path: '/', icon: <LinkedInIcon className={classes.grey} /> },
  ];

  return (
    <Box className={classes.boxMargin} sx={{ borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }}>
      <Container maxWidth='lg'>
        {/* left */}
        <Grid container spacing={{ xs: 1, md: 4 }}>
          <Grid item xs={12} sm={12} md={5}>
            <div className={classes.brand}>
              <Image src={logo} alt='logo' />
            </div>
            <p className={classes.desc}>
              This website is for health information and advice about coronavirus (COVID-19), how to prevent yourself from the disease.
            </p>
            <div className={classes.iconContainer}>
              <Box className={classes.fbContainer}>
                <Link href='/' passHref>
                  <Tooltip title='Facebook'>
                    <FacebookIcon className={classes.grey} />
                  </Tooltip>
                </Link>
              </Box>
              {socialMedia.map(({ title, path, icon }, idx) => (
                <Box key={idx} className={classes.icon}>
                  <Link href={path} passHref>
                    <Tooltip title={title}>{icon}</Tooltip>
                  </Link>
                </Box>
              ))}
            </div>
          </Grid>

          {/* center */}
          <Grid item xs={12} sm={12} md={3}>
            <Stack
              sx={{
                display: { xs: `none`, md: `flex` },
              }}>
              <h2 className={classes.title}>Menu</h2>
              <Grid container spacing={{ sm: 1, md: 6 }}>
                <Grid item>
                  {navLinks1.map(({ title, path }, idx) => (
                    <div key={idx} className={classes.mr}>
                      <Link href={path} passHref>
                        <a className={classes.link}>{title}</a>
                      </Link>
                    </div>
                  ))}
                </Grid>
                <Grid item>
                  {navLinks2.map(({ title, path }, idx) => (
                    <div key={idx} className={classes.mr}>
                      <Link href={path} passHref>
                        <a className={classes.link}>{title}</a>
                      </Link>
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* right */}
          <Grid item xs={12} sm={12} md={4}>
            <h2 className={classes.title}>Repository</h2>
            <Box className={classes.pointer}>
              <Link href='https://github.com/dewasemadi/info-covid' passHref>
                <a className={classes.gitContainer} target='_blank' rel='noreferrer'>
                  <GitHubIcon />
                  <p className={classes.github}>Github</p>
                </a>
              </Link>
            </Box>

            <p className={classes.marginFooter}>&copy; 2021 Copyright All Rights Reserved</p>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.withLove}>
        <p className={classes.doa}>Build with</p>
        <FavoriteRoundedIcon sx={{ margin: '0 2px', fontSize: 18 }} color='error' />
        <p className={classes.doa}>by</p>
        <Link href='/about' passHref>
          <p className={classes.doaIbu}>Doa Ibu</p>
        </Link>
      </div>
    </Box>
  );
}
