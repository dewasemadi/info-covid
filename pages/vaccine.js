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
    text: 'AstraZeneca/Oxford Vaccine, Johnson & Johnson, Moderna, Pfizer/BionTech, Sinopharm, and Sinovac. ',
  },
  {
    title: 'How Does A Vaccine Work?',
    text: 'Vaccines reduce risks of getting a disease by working with your body’s natural defenses to build protection. When you get a vaccine, your immune system responds.  It recognizes the invading germ, such as the virus or bacteria, produces antibodies, also remembers the disease and how to fight it.  The vaccine is therefore a safe and clever way to produce an immune response in the body, without causing illness.',
  },
];

const facts = [
  {
    list: ' Covid-19 vaccines do not create or cause variants of the virus that causes Covid-19.',
  },
  {
    list: ' Covid-19 vaccines do not contain microchips. Vaccines are developed to fight against disease and are not administered to track your movement. Vaccines work by stimulating your immune system to produce antibodies, exactly like it would if you were exposed to the disease. After getting vaccinated, you develop immunity to that disease, without having to get the disease first. ',
  },
  {
    list: ' COVID-19 vaccines do not change or interact with your DNA in any way. Both mRNA and viral vector COVID-19 vaccines deliver instructions (genetic material) to our cells to start building protection against the virus that causes COVID-19. However, the material never enters the nucleus of the cell, which is where our DNA is kept.',
  }
]

const myths = [
  {
    list: ' I do not need mask anymore if I have been vaccinated. ',
  },
  {
    list: ' COVID-19 vaccine enters my cells and changes my DNA. ',
  },
  {
    list: ' If I have already had COVID-19, I don’t need a vaccine. '
  },
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
          <div style={{ marginBottom:'20px' }}>
            <h3>Myths</h3>
            <ul>
              {myths.map((myth, idx) => (
                <div key={idx} style={{ margin: '0' }}>
                  <li><p>{myth.list}</p></li>
                </div>
              ))}
            </ul>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3>Facts</h3>
            <ul>
              {facts.map((fact, idx) => (
                <div key={idx} style={{ margin: '0' }}>
                  <li><p>{fact.list}</p></li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
