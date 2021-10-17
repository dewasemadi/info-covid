import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import styles from './Accordion.style';
const useStyles = makeStyles(styles);

const faq = [
  {
    question: 'What are COVID-19 symptomps?',
    answer:
      'The most common symtomps of COVID-19 are fever, cough, tiredness, and lost of taste or smell. The less common symptoms are sore throat, headache, aches and pains, diarrhea, a rash on skin, and irritated eyes.  The serious symptoms are difficulty breathing or shortness of breath, loss of speech or mobility, confusion, and chest pain. ',
  },
  {
    question: 'What should I do if I have COVID-19 symptomps?',
    answer:
      'Seek immediate medical attention if you have serious symptoms like difficulty breathing or short of breath, lost of speech or mobility, confusion, and chest pain.  Always call before visiting your doctor or health facility. People with mild/common symptoms who are otherwise healthy should manage their symptoms at home.  On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days. ',
  },
  {
    question: 'Can the virus that causes COVID-19 be transmitted through the air?',
    answer:
      'No. Until now, research has shown that the virus that causes COVID-19 is transmitted through contact with small droplets from the respiratory tract.',
  },
  {
    question: 'Are antibiotics effective in preventing and treating COVID-19?',
    answer:
      'No, antibiotics only work against bacteria, not viruses. Because COVID-19 is caused by a virus, antibiotics cannot be used as a means of prevention or treatment. However, if you are hospitalized and diagnosed with COVID-19, you may be given antibiotics, as secondary infections are often caused by bacteria.',
  },
  {
    question: 'I have questions that are not here, where should i ask?',
    answer:
      'You can call 119 for questions and information about COVID-19. ',
  },
];

export default function MyAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {faq.map(({ question, answer }, idx) => (
        <Accordion
          expanded={expanded === `${idx}`}
          onChange={handleChange(`${idx}`)}
          key={idx}
          elevation={0}
          className={classes.accordionContainer}
          variant='outlined'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${idx}-content`}
            id={`${idx}-header`}
            style={{ borderColor: 'none' }}>
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
