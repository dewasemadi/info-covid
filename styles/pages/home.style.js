const homeStyle = {
  title: {
    marginTop: '10px',
    fontWeight: 500,
    fontSize: '18px',
  },
  title2: {
    textAlign: 'center',
    '@media screen and (max-width: 900px)': {
      margin: '50px 0 20px 0',
    },
  },
  title3: {
    '@media screen and (max-width: 900px)': {
      marginTop: '30px',
    },
  },
  title4: {
    marginTop: '10px',
    fontWeight: 500,
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  title5: {
    '@media screen and (max-width: 900px)': {
      marginTop: '30px',
      textAlign: 'center',
    },
  },
  desc: {
    '@media screen and (max-width: 900px)': {
      marginBottom: '40px',
      textAlign: 'center',
    },
  },
  summaryContainer: {
    '@media screen and (min-width: 900px)': {
      width: '700px !important',
      margin: 'auto !important',
    },
  },
  update: {
    marginTop: '20px',
    textAlign: 'center',
    '@media screen and (min-width: 900px)': {
      width: '700px',
      margin: 'auto',
      marginTop: '10px',
      textAlign: 'end',
    },
  },
  shadow: {
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
  },
  img: {
    display: 'block !important',
    margin: 'auto !important',
  },
};

export default homeStyle;
