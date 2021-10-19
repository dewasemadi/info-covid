/* eslint-disable @next/next/no-css-tags */
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../styles/pages/_app.style';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const useStyles = makeStyles(styles);

Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeError', NProgress.done);
Router.events.on('routeChangeComplete', NProgress.done);

const theme = createTheme({
  typography: {
    fontFamily: ['IBM Plex Sans !important', 'sans-serif'],
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Provider store={store}>
          <Box className={classes.container}>
            <Component {...pageProps} />
            <Footer />
          </Box>
        </Provider>
        <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
