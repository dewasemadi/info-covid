const footerStyle = {
  marginFooter: {
    marginTop: "25px",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.6)",
    "@media screen and (max-width: 900px)": {
      marginTop: "10px",
      marginBottom: "56px",
    },
  },
  boxMargin: {
    marginTop: "50px",
    backgroundColor: "white",
    padding: "15px 0",
    "@media screen and (min-width: 900px)": {
      padding: "50px 0",
    },
  },
  grey: {
    color: "rgba(0, 0, 0, 0.6)",
    "@media screen and (min-width: 900px)": {
      "&:hover": {
        color: "rgba(0, 0, 0, 1)",
      },
    },
  },
  link: {
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.6)",
    "@media screen and (min-width: 900px)": {
      "&:hover": {
        color: "rgba(0, 0, 0, 1)",
      },
    },
  },
  title: {
    fontSize: "16px",
    fontWeight: 500,
    marginBottom: "10px",
    color: "rgba(0, 0, 0, 0.8)",
  },
  desc: {
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  github: {
    margin: "auto 0 auto 10px",
    display: "block",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  gitContainer: {
    display: "flex",
    color: "rgba(0, 0, 0, 0.6)",
  },
  pointer: {
    cursor: "pointer",
  },
  mr: {
    marginRight: "10px",
  },
  iconContainer: {
    display: "flex",
    marginTop: "auto",
    marginBottom: "-10px",
  },
  fbContainer: {
    cursor: "pointer",
    margin: "10px 10px 10px 0",
  },
  icon: {
    cursor: "pointer",
    margin: "10px",
    color: "rgba(0, 0, 0, 0.6)",
  },
};

export default footerStyle;
