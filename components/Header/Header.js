import Link from 'next/link';
import { cloneElement, useState, Fragment } from 'react';
import { Container, AppBar, Toolbar, CssBaseline, useScrollTrigger, Box, Stack, Button, SwipeableDrawer, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import styles from './Header.style';
const useStyles = makeStyles(styles);

const navLinks = [
  { title: `Statistics`, path: '/statistics' },
  { title: `Vaccine`, path: '/vaccine' },
  { title: `Hospital`, path: '/hospital' },
  { title: `FAQ`, path: '/faq' },
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
  const classes = useStyles();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setIsOpen(open);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Stack spacing={1} className={classes.stack}>
        <Link href="tel:119" passHref>
          <Button size="large" startIcon={<CallRoundedIcon />} className={classes.hotline}>
            Hotline
          </Button>
        </Link>

        <Link href="/faq" passHref>
          <Button
            size="large"
            startIcon={<HelpRoundedIcon />}
            className={router.pathname === '/faq' ? classes.aboutActive : classes.aboutDeactive}
          >
            FAQ
          </Button>
        </Link>
      </Stack>
    </Box>
  );

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: 'white' }}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolBar}>
              {router.pathname === '/hospital/list' || router.pathname === '/hospital/detail' ? (
                <IconButton
                  onClick={() => router.back()}
                  aria-label="back"
                  size="medium"
                  color="primary"
                  sx={{ display: { md: `none` } }}
                  className={classes.grey}
                >
                  <ArrowBackRoundedIcon fontSize="inherit" className={classes.icon} />
                </IconButton>
              ) : null}

              <Link href="/" passHref>
                <div className={classes.brand}>
                  <img src="/logo.png" alt="logo" className={classes.block} />
                </div>
              </Link>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: { xs: `none`, md: `flex` },
                }}
              >
                {navLinks.map(({ title, path }, idx) => (
                  <Link key={idx} href={path} passHref>
                    <Button
                      size="medium"
                      className={
                        router.pathname === `${path}` || router.pathname === `${path}/list` || router.pathname === `${path}/detail`
                          ? classes.navActive
                          : classes.navDeactive
                      }
                    >
                      {title}
                    </Button>
                  </Link>
                ))}
                <Link href="tel:119" passHref>
                  <Button size="medium" startIcon={<CallRoundedIcon />} className={classes.hotlineDesktop}>
                    Hotline
                  </Button>
                </Link>
              </Stack>

              {/* hamburger btn for mobile version */}
              <Box
                sx={{
                  display: { xs: `flex`, md: `none` },
                }}
              >
                <IconButton onClick={toggleDrawer(true)} aria-label="menu" size="medium" color="primary" className={classes.grey}>
                  <MenuRoundedIcon fontSize="inherit" className={classes.icon} />
                </IconButton>
                <SwipeableDrawer anchor="right" open={isOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
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
