import Head from "next/head";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/pages/vaccine.style";
const useStyles = makeStyles(styles);

const contents = [
  {
    title: "What is Vaccination?",
    text: "Vaccination is a simple, safe, and effective way of protecting you against harmful diseases, before you come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger.",

  },
  {
    title: "The Goals of Vaccination",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet lobortis nisi, ac vestibulum metus efficitur vel. Sed venenatis auctor odio, quis pretium erat. In erat lorem, lacinia a lectus ultricies, congue porta tellus. Sed ut imperdiet metus. Mauris sagittis sodales ipsum, sed ultrices odio fringilla quis. Nullam a vehicula mauris. Maecenas in libero turpis.",
  },
  {
    title: "Kinds of Vaccine",
    text: "Sinovac, Moderna, AstraZeneca, Pfizer",
  },
  {
    title: "How Does A Vaccine Work?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet lobortis nisi, ac vestibulum metus efficitur vel. Sed venenatis auctor odio, quis pretium erat. In erat lorem, lacinia a lectus ultricies, congue porta tellus. Sed ut imperdiet metus. Mauris sagittis sodales ipsum, sed ultrices odio fringilla quis. Nullam a vehicula mauris. Maecenas in libero turpis.",
  },
  {
    title: "Facts & Myths About Vaccine",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet lobortis nisi, ac vestibulum metus efficitur vel. Sed venenatis auctor odio, quis pretium erat. In erat lorem, lacinia a lectus ultricies, congue porta tellus. Sed ut imperdiet metus. Mauris sagittis sodales ipsum, sed ultrices odio fringilla quis. Nullam a vehicula mauris. Maecenas in libero turpis.",
  },
];

export default function Vaccine() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Vaccine</title>
      </Head>
      <Container maxWidth='lg'>
        {contents.map((content, idx) => (
            <div>
              <h2 className={classes.title}>{content.title}</h2>
              <p className={classes.text}>{content.text}</p>
              <br></br>
            </div>
          ))}
      </Container>
    </div>
  );
}
