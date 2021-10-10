const aboutStyle = {
  title: {
    marginTop: "10px",
    fontWeight: 500,
    fontSize: "18px",
    textAlign: "center",
  },
  title2: {
    marginTop: "20px",
    fontWeight: 500,
    fontSize: "18px",
    textAlign: "center",
  },
  disclaimerDesc: {
    textAlign: "center",
    fontSize: "16px",
    marginTop: "10px",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.6)",
    width: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    "@media screen and (max-width: 900px)": {
      width: "100%",
    },
  },
  sourceContainer: {
    width: "500px",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    "@media screen and (max-width: 900px)": {
      width: "100%",
    },
  },
  source: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 400,
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.6)",
    "@media screen and (min-width: 900px)": {
      "&:hover": {
        color: "rgba(0, 0, 0, 1)",
      },
    },
  },
};

export default aboutStyle;
