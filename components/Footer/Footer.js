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
  { title: "Twitter", path: "/", icon: <TwitterIcon style={{ color: "rgba(0, 0, 0, 0.6)" }} /> },
  { title: "Instagram", path: "/", icon: <InstagramIcon style={{ color: "rgba(0, 0, 0, 0.6)" }} /> },
  { title: "Linkedin", path: "/", icon: <LinkedInIcon style={{ color: "rgba(0, 0, 0, 0.6)" }} /> },
];

export default function Footer() {
  return (
    <Box className={styles.boxMargin} sx={{ borderTop: 1, borderColor: "grey.400" }}>
      <Container maxWidth='lg'>
        {/* left */}
        <Grid container spacing={{ xs: 1, md: 4 }}>
          <Grid item xs={12} sm={12} md={5}>
            <h2 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "10px", color: "rgba(0, 0, 0, 0.8)" }}>infoCovid</h2>
            <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>
              This website is for health information and advice about coronavirus (COVID-19), how to prevent yourself from the disease.
            </p>
            <div style={{ display: "flex", marginTop: "auto", marginBottom: "-10px" }}>
              <Box style={{ cursor: "pointer", margin: "10px 10px 10px 0" }}>
                <Link href='/' passhref>
                  <Tooltip title='Facebook'>
                    <FacebookIcon style={{ color: "rgba(0, 0, 0, 0.6)" }} />
                  </Tooltip>
                </Link>
              </Box>
              {socialMedia.map(({ title, path, icon }, idx) => (
                <Box key={idx} style={{ cursor: "pointer", margin: "10px" }}>
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
              <h2 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "10px", color: "rgba(0, 0, 0, 0.8)" }}>Menu</h2>
              <Grid container spacing={{ sm: 1, md: 6 }}>
                <Grid item>
                  {navLinks1.map(({ title, path }, idx) => (
                    <div key={idx} style={{ marginRight: "10px" }}>
                      <Link href={path} passhref>
                        <a style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>{title}</a>
                      </Link>
                    </div>
                  ))}
                </Grid>
                <Grid item>
                  {navLinks2.map(({ title, path }, idx) => (
                    <div key={idx} style={{ marginRight: "10px" }}>
                      <Link href={path} passhref>
                        <a style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>{title}</a>
                      </Link>
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* right */}
          <Grid item xs={12} sm={12} md={4}>
            <h2 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "10px", color: "rgba(0, 0, 0, 0.8)" }}>Repository</h2>
            <Box style={{ cursor: "pointer" }}>
              <Link href='https://github.com/dewasemadi/info-covid' passhref>
                <a style={{ display: "flex" }} target='_blank' rel='noreferrer'>
                  <GitHubIcon style={{ color: "rgba(0, 0, 0, 0.6)" }} />
                  <p style={{ margin: "auto 0 auto 10px", display: "block", fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>Github</p>
                </a>
              </Link>
            </Box>
            <Box sx={{ marginTop: { md: "25px" } }}>
              <p className={styles.marginFooter}>&copy; 2021 Copyright All Rights Reserved</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
