import Link from "next/link";
import { Box, Grid, Container, Stack, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./Footer.module.css";

const navLinks1 = [
  { title: `Statistics`, path: "/statistics" },
  { title: `Vaccine`, path: "/vaccine" },
];

const navLinks2 = [
  { title: `Hospital`, path: "/hospital" },
  { title: `About Us`, path: "/about" },
];

const socialMedia = [
  { title: "Twitter", path: "/", icon: <TwitterIcon className={styles.grey} /> },
  { title: "Instagram", path: "/", icon: <InstagramIcon className={styles.grey} /> },
  { title: "Linkedin", path: "/", icon: <LinkedInIcon className={styles.grey} /> },
];

export default function Footer() {
  return (
    <Box className={styles.boxMargin} sx={{ borderTop: 1, borderColor: "grey.400" }}>
      <Container maxWidth='lg'>
        {/* left */}
        <Grid container spacing={{ xs: 1, md: 4 }}>
          <Grid item xs={12} sm={12} md={5}>
            <h2 className={styles.title}>infoCovid</h2>
            <p className={styles.desc}>
              This website is for health information and advice about coronavirus (COVID-19), how to prevent yourself from the disease.
            </p>
            <div className={styles.iconContainer}>
              <Box className={styles.fbContainer}>
                <Link href='/' passhref>
                  <Tooltip title='Facebook'>
                    <FacebookIcon className={styles.grey} />
                  </Tooltip>
                </Link>
              </Box>
              {socialMedia.map(({ title, path, icon }, idx) => (
                <Box key={idx} className={styles.icon}>
                  <Link href={path} passhref>
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
              <h2 className={styles.title}>Menu</h2>
              <Grid container spacing={{ sm: 1, md: 6 }}>
                <Grid item>
                  {navLinks1.map(({ title, path }, idx) => (
                    <div key={idx} className={styles.mr}>
                      <Link href={path} passhref>
                        <a className={styles.link}>{title}</a>
                      </Link>
                    </div>
                  ))}
                </Grid>
                <Grid item>
                  {navLinks2.map(({ title, path }, idx) => (
                    <div key={idx} className={styles.mr}>
                      <Link href={path} passhref>
                        <a className={styles.link}>{title}</a>
                      </Link>
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* right */}
          <Grid item xs={12} sm={12} md={4}>
            <h2 className={styles.title}>Repository</h2>
            <Box className={styles.pointer}>
              <Link href='https://github.com/dewasemadi/info-covid' passhref>
                <a className={styles.gitContainer} target='_blank' rel='noreferrer'>
                  <GitHubIcon />
                  <p className={styles.github}>Github</p>
                </a>
              </Link>
            </Box>
            <p className={styles.marginFooter}>&copy; 2021 Copyright All Rights Reserved</p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
