import Link from 'next/link';
import styles from './Header.style';
import { makeStyles } from '@mui/styles';
import { cloneElement, useState, Fragment } from 'react';
import { Container, AppBar, Toolbar, CssBaseline, useScrollTrigger, Box, Stack, Button, SwipeableDrawer, IconButton } from '@mui/material';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import BubbleChartTwoToneIcon from '@mui/icons-material/BubbleChartTwoTone';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
const useStyles = makeStyles(styles);

const navLinks = [
  { title: `Home`, path: '/', icon: <HomeTwoToneIcon /> },
  { title: `Statistics`, path: '/statistics', icon: <InsertChartTwoToneIcon /> },
  { title: `Vaccine`, path: '/vaccine', icon: <BubbleChartTwoToneIcon /> },
  { title: `Hospital`, path: '/hospital', icon: <LocalHospitalTwoToneIcon /> },
  { title: `About Us`, path: '/about', icon: <InfoTwoToneIcon /> },
];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setIsOpen(open);
  };

  const list = (navLinks) => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Stack spacing={1} className={classes.stack}>
        <Link href="tel:119" passHref>
          <Button size="large" startIcon={<CallTwoToneIcon />} className={classes.hotline} style={{ textTransform: 'capitalize' }}>
            Covid-19 Hotline 119
          </Button>
        </Link>

        {navLinks.map(({ title, path, icon }, idx) => (
          <Link href={path} passHref key={idx}>
            <Button size="large" startIcon={icon} className={classes.navLinkMobile} style={{ textTransform: 'capitalize' }}>
              {title}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: 'white' }}>
          <Container maxWidth="lg">
            <Toolbar style={{ justifyContent: 'space-between', padding: 0 }}>

              <Link href="/" passHref>
                <Button size="large" style={{ textTransform: 'capitalize' }}>Lawan Corona</Button>
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
                    <Button size="large" style={{ textTransform: 'capitalize' }}>{title}</Button>
                  </Link>
                ))}
                <Link href="tel:119" passHref>
                  <Button size="large" startIcon={<CallTwoToneIcon />} style={{ textTransform: 'capitalize' }}>
                    Covid-19 Hotline 119
                  </Button>
                </Link>
              </Stack>

              {/* hamburger btn for mobile version */}
              <Box
                sx={{
                  display: { xs: `flex`, md: `none` },
                }}
              >
                <IconButton onClick={toggleDrawer(true)} aria-label="menu" size="medium" color="primary">
                  <MenuRoundedIcon fontSize="inherit" />
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
