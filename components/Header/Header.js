import Link from "next/link";
import { cloneElement, useState, Fragment } from "react";
import { Container, AppBar, Toolbar, CssBaseline, useScrollTrigger, Box, Stack, Button, SwipeableDrawer, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

const navLinks = [
  { title: `Home`, path: "/" },
  { title: `Statistics`, path: "/statistics" },
  { title: `Vaccine`, path: "/vaccine" },
  { title: `Hospital`, path: "/hospital" },
  { title: `About Us`, path: "/about" },
];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 3 : 0,
  });
}

export default function Navbar(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setIsOpen(open);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Stack spacing={1} className={styles.stack}>
        <Link href='tel:119' passHref>
          <Button size='large' startIcon={<CallRoundedIcon />} className={styles.hotline}>
            Covid-19 Hotline 119
          </Button>
        </Link>

        <Link href='/about' passHref>
          <Button
            size='large'
            startIcon={<HelpRoundedIcon />}
            className={router.pathname === "/about" ? styles.aboutActive : styles.aboutDeactive}>
            About Us
          </Button>
        </Link>
      </Stack>
    </Box>
  );

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={styles.bgWhite}>
          <Container maxWidth='lg'>
            <Toolbar className={styles.toolBar}>
              {router.pathname === "/hospital/bed" || router.pathname === "/hospital/detail" ? (
                <IconButton
                  onClick={() => router.back()}
                  aria-label='back'
                  size='medium'
                  color='primary'
                  sx={{ display: { md: `none` } }}
                  className={styles.grey}>
                  <ArrowBackRoundedIcon fontSize='inherit' className={styles.grey} />
                </IconButton>
              ) : null}

              <Link href='/' passHref>
                <a className={styles.brand}>infoCovid</a>
              </Link>

              <Stack
                direction='row'
                spacing={1}
                sx={{
                  display: { xs: `none`, md: `flex` },
                }}>
                {navLinks.map(({ title, path }, idx) => (
                  <Link key={idx} href={path} passHref>
                    <Button size='medium' className={router.pathname === `${path}` ? styles.navActive : styles.navDeactive}>
                      {title}
                    </Button>
                  </Link>
                ))}
                <Link href='tel:119' passHref>
                  <Button size='medium' startIcon={<CallRoundedIcon />} className={styles.hotlineDesktop}>
                    Covid-19 Hotline 119
                  </Button>
                </Link>
              </Stack>

              {/* hamburger btn for mobile version */}
              <Box
                sx={{
                  display: { xs: `flex`, md: `none` },
                }}>
                <IconButton onClick={toggleDrawer(true)} aria-label='menu' size='medium' color='primary' className={styles.grey}>
                  <MenuRoundedIcon fontSize='inherit' className={styles.grey} />
                </IconButton>
                <SwipeableDrawer anchor='right' open={isOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                  {list(navLinks)}
                </SwipeableDrawer>
              </Box>
              {/* end hamburger btn area */}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
}
