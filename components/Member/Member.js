import Link from "next/link";
import Image from "next/image";
import { Box, Grid, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./Member.style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Putu from "../../public/developer/Putu.png";
import Faris from "../../public/developer/Faris.png";
import Tio from "../../public/developer/Tio.png";
const useStyles = makeStyles(styles);

const developers = [
  {
    name: "I Dewa Putu Semadi",
    picture: Putu,
    role: "Team Leader & Frontend Developer",
    github: "https://github.com/dewasemadi",
    linkedin: "https://www.linkedin.com/in/dewasemadi/",
  },
  {
    name: "Faris Ilham Noormandiri",
    picture: Faris,
    role: "Frontend Developer",
    github: "https://github.com/Nif21",
    linkedin: "https://www.linkedin.com/in/faris-ilham-noormandiri-6956b4208/",
  },
  {
    name: "Tio Ramadhan",
    picture: Tio,
    role: "UI Designer",
    github: "https://github.com/tioramadhn",
    linkedin: "https://www.linkedin.com/in/tio-ramadhan-ab77431a2/",
  },
];

export default function Member() {
  const classes = useStyles();
  return (
    <div className="textGradient">
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {developers.map((developer, idx) => (
          <Grid item xs={12} sm={12} md={4} key={idx}>
            <Box sx={{ textAlign: "center" }}>
              <Image src={developer.picture} alt={developer.name} width={200} height={210} quality={100} />
              <h2 className={classes.name}>{developer.name}</h2>
              <p className={classes.role}>{developer.role}</p>
            </Box>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href={developer.github}>
                <a target='_blank' rel='noreferrer'>
                  <Tooltip title='Github'>
                    <GitHubIcon className={classes.icon} />
                  </Tooltip>
                </a>
              </Link>
              <Link href={developer.linkedin}>
                <a target='_blank' rel='noreferrer'>
                  <Tooltip title='LinkedIn'>
                    <LinkedInIcon className={classes.icon} />
                  </Tooltip>
                </a>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
