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
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id consectetur lacus. Nunc condimentum metus id nisl elementum placerat. Nunc metus turpis, iaculis sit amet volutpat et, accumsan egestas neque. Maecenas cursus, risus vitae facilisis ornare, dui dolor venenatis erat, a semper turpis massa ut velit. ',
  },
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id consectetur lacus. Nunc condimentum metus id nisl elementum placerat. Nunc metus turpis, iaculis sit amet volutpat et, accumsan egestas neque. Maecenas cursus, risus vitae facilisis ornare, dui dolor venenatis erat, a semper turpis massa ut velit. ',
  },
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id consectetur lacus. Nunc condimentum metus id nisl elementum placerat. Nunc metus turpis, iaculis sit amet volutpat et, accumsan egestas neque. Maecenas cursus, risus vitae facilisis ornare, dui dolor venenatis erat, a semper turpis massa ut velit. ',
  },
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id consectetur lacus. Nunc condimentum metus id nisl elementum placerat. Nunc metus turpis, iaculis sit amet volutpat et, accumsan egestas neque. Maecenas cursus, risus vitae facilisis ornare, dui dolor venenatis erat, a semper turpis massa ut velit. ',
  },
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id consectetur lacus. Nunc condimentum metus id nisl elementum placerat. Nunc metus turpis, iaculis sit amet volutpat et, accumsan egestas neque. Maecenas cursus, risus vitae facilisis ornare, dui dolor venenatis erat, a semper turpis massa ut velit. ',
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
