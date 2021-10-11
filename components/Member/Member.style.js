const memberStyle = {
  name: {
    fontSize: "16px",
    fontWeight: 500,
    marginTop: "10px",
  },
  role: {
    fontSize: "14px",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.6)",
  },
  icon: {
    color: "rgba(0, 0, 0, 0.6)",
    margin: "5px",
    "@media screen and (min-width: 900px)": {
      "&:hover": {
        color: "rgba(0, 0, 0, 1)",
      },
    },
  },
};

export default memberStyle;
