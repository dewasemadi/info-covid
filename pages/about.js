import Head from "next/head";
import Link from "next/link";
import Member from "../components/Member/Member";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/pages/about.style";
import LinkIcon from "@mui/icons-material/Link";
const useStyles = makeStyles(styles);

const sources = [
  { title: "Mathdroid Covid-19 API", link: "https://github.com/mathdroid/covid-19-api" },
  { title: "Covid-19 Indonesia V2 API", link: "https://github.com/Reynadi531/api-covid19-indonesia-v2" },
  { title: "Vaksin Covid Indonesia API", link: "https://github.com/Reynadi531/vaksincovid19-api" },
  { title: "RS Bed Covid API", link: "https://github.com/satyawikananda/rs-bed-covid-indo-api" },
];

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Container maxWidth='lg'>
        <h2 className={classes.title}>Meet Our Super Team</h2>
        <Member />
        <h2 className={classes.title2}>Disclaimer</h2>
        <p className={classes.disclaimerDesc}>
          infoCovid is <b>not the official website</b> of the Indonesian government. The data on this website comes from various public api
          sources and there may be misinformation with central government data.
        </p>
        <h2 className={classes.title2}>Resources</h2>
        <div className={classes.sourceContainer}>
          {sources.map((source, idx) => (
            <Link href={source.link} passHref key={idx}>
              <a target='_blank' rel='noreferrer'>
                <div className={classes.source}>
                  <LinkIcon />
                  <p>{source.title}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
