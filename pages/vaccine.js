import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../styles/pages/vaccine.style';
import MyTabs from '../components/Tabs/Tabs';
const useStyles = makeStyles(styles);

const contents = [
  {
    title: 'What is Vaccination?',
    text: 'Vaccination is a simple, safe, and effective way of protecting you against harmful diseases, before you come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger.',
  },
  {
    title: 'The Goals of Vaccination',
    text: 'Two key reasons to get vaccinated are to protect ourselves and to protect those around us. Because not everyone can be vaccinated – including very young babies, those who are seriously ill or have certain allergies – they depend on others being vaccinated to ensure they are also safe from vaccine-preventable diseases.',
  },
  {
    title: 'Kinds of Vaccine',
    text: 'AstraZeneca/Oxford Vaccine, Johnson & Johnson, Moderna, Pfizer/BionTech, Sinopharm, and Sinovac',
  },
  {
    title: 'How Does A Vaccine Work?',
    text: 'Vaccines reduce risks of getting a disease by working with your body’s natural defenses to build protection. When you get a vaccine, your immune system responds.  It recognizes the invading germ, such as the virus or bacteria, produces antibodies, also remembers the disease and how to fight it.  The vaccine is therefore a safe and clever way to produce an immune response in the body, without causing illness.',
  },
  {
    title: 'Facts & Myths About Vaccine',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet lobortis nisi, ac vestibulum metus efficitur vel. Sed venenatis auctor odio, quis pretium erat. In erat lorem, lacinia a lectus ultricies, congue porta tellus. Sed ut imperdiet metus. Mauris sagittis sodales ipsum, sed ultrices odio fringilla quis. Nullam a vehicula mauris. Maecenas in libero turpis.',
  },
];

const resources = [
  {
    list: 'https://www.who.int/news-room/q-a-detail/vaccines-and-immunization-what-is-vaccination',
  },
  {
    list: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines/advice'
  }
]

export default function Vaccine() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Vaccine</title>
      </Head>
      <Container maxWidth='lg'>
        <MyTabs />
        <div style={{ marginTop: '40px' }}>
          {contents.map((content, idx) => (
            <div key={idx} style={{ margin: '20px 0' }}>
              <h3>{content.title}</h3>
              <p>{content.text}</p>
            </div>
          ))}
          <h3>Sumber</h3>
          <ul>
            {resources.map((resource, idx) => (
              <div key={idx} style={{ margin: '0' }}>
                <li><a href="{resource.list}">{resource.list}</a></li>
              </div>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
