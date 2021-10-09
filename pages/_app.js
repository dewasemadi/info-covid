/* eslint-disable @next/next/no-css-tags */
import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress";
import store from "../redux/store";
import { Provider } from "react-redux";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <Box sx={{ height: "100vh", display: "block" }}>
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Provider>
      <Navigation />
    </div>
  );
}

export default MyApp;
