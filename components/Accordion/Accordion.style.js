const accordionStyle = {
  accordionContainer: {
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
    margin: '20px 0',
    '&:before': {
      display: 'none',
    },
  },
  blueText: {
    color: '#0093E9',
  },
  faqContainer: {
    marginTop: '20px !important',
    '@media screen and (min-width: 900px)': {
      width: '650px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};

export default accordionStyle;
