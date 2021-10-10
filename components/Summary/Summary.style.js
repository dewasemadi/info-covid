const summaryStyle = {
  mt20: { marginTop: "10px" },
  pt16: { paddingTop: "16px" },
  textCenter: { textAlign: "center" },
  container: {
    height: "100vh",
    display: "flex",
    marginTop: "-64px",
    justifyContent: "center",
    alignItems: "center",
  },
  btnCustom: {
    margin: "10px auto auto auto",
    display: "block",
    textTransform: "capitalize",
  },
  errorMessage: { textAlign: "center", marginTop: "10px" },
  title: {
    textAlign: "center",
    marginTop: "10px",
    fontWeight: 500,
    fontSize: "18px",
    "@media screen and (max-width: 900px)": {
      textAlign: "start",
    },
  },
  desc: { textAlign: "center" },
  "@media screen and (max-width: 900px)": {
    desc: { textAlign: "start" },
  },
};

export default summaryStyle;
