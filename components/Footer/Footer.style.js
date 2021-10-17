const footerStyle = {
  marginFooter: {
    marginTop: '25px',
    fontSize: '14px',
    color: '#42B3D7',
    '@media screen and (max-width: 900px)': {
      marginTop: '10px',
    },
  },
  withLove: {
    backgroundImage: 'linear-gradient(to right, #0093e9, #80d0c7) !important',
    justifyContent: 'center',
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    '@media screen and (max-width: 900px)': {
      marginTop: '10px',
      marginBottom: '40px',
    },
  },
  doaIbu: {
    marginLeft: '3px',
    cursor: 'pointer',
    fontWeight: 500,
    color: 'white',
    padding: '7px 0',
  },
  boxMargin: {
    marginTop: '50px',
    backgroundColor: 'white',
    padding: '15px 0',
    '@media screen and (min-width: 900px)': {
      padding: '50px 0 0 0',
    },
  },
  grey: {
    color: '#42B3D7',
    '@media screen and (min-width: 900px)': {
      '&:hover': {
        color: '#0093e9',
      },
    },
  },
  link: {
    fontSize: '14px',
    color: '#42B3D7',
    '@media screen and (min-width: 900px)': {
      '&:hover': {
        color: '#0093e9',
      },
    },
  },
  brand: {
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: '10px',
    color: 'rgba(0, 0, 0, 0.8)',
    maxWidth: '100px !important',
    cursor: 'pointer !important',
  },
  title: {
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: '10px',
    color: '#0093e9',
  },
  desc: {
    fontSize: '14px',
    color: '#42B3D7',
  },
  github: {
    margin: 'auto 0 auto 10px',
    display: 'block',
    fontSize: '14px',
    color: '#42B3D7',
  },
  doa: {
    color: 'white',
  },
  gitContainer: {
    display: 'flex',
    color: '#42B3D7',
  },
  pointer: {
    cursor: 'pointer',
  },
  mr: {
    marginRight: '10px',
  },
  iconContainer: {
    display: 'flex',
    marginTop: 'auto',
    marginBottom: '-10px',
  },
  fbContainer: {
    cursor: 'pointer',
    margin: '10px 10px 10px 0',
  },
  icon: {
    cursor: 'pointer',
    margin: '10px',
    color: 'rgba(0, 0, 0, 0.6)',
  },
};

export default footerStyle;
