/* eslint-disable @next/next/no-css-tags */
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeError', NProgress.done);
Router.events.on('routeChangeComplete', NProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <br/>
      <Footer />
    </div>
  );
}

export default MyApp;
