const hospitalStyle = {
  title: {
    fontSize: '16px',
    fontWeight: 500,
  },
  container: {
    display: 'flex',
    marginTop: '5px',
    '-webkit-tap-highlight-color': 'transparent',
  },
  address: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
  },
  update: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
    marginTop: '5px',
  },
  phone: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.6)',
      marginBottom: '-1px',
    },
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  mt5: {
    marginTop: '5px',
  },
  errorMessageContainer: {
    height: '100vh',
    display: 'flex',
    marginTop: '-64px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  errorMessage: { textAlign: 'center', marginTop: '10px' },
  btnCustom: {
    textTransform: 'capitalize',
    marginTop: '10px',
    color: 'rgba(0, 0, 0, 0.6)',
    '&:hover': {
      backgroundColor: 'rgba(233, 233, 233, 0.3)',
    },
  },
  availability: {
    '@media screen and (max-width: 900px)': {
      margin: '10px 0',
    },
  },
  cardShadow: {
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
    position: 'relative',
    top: 0,
    transition: 'top ease 0.3s',
    '@media screen and (min-width: 900px)': {
      '&:hover': {
        top: '-5px',
      },
    },
  },
};

export default hospitalStyle;
