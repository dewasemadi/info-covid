const footerStyle = (theme) => ({
  footerMargin: {
    padding: "40px 0",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "56px",
    },
  },
});

export default footerStyle;
