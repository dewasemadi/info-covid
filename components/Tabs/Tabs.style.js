const tabStyle = {
  title: {
    fontWeight: 500,
    fontSize: "18px",
  },
  tabPanelContainer: {
    width: "-webkit-fill-available",
    paddingLeft: "15px",
    "@media screen and (max-width: 600px)": {
      paddingLeft: 0,
      paddingTop: "15px",
    },
  },
  tabStyle: {
    "@media screen and (min-width: 600px)": {
      width: "120px",
    },
  },
  btnCustom: {
    textTransform: "capitalize",
    fontSize: "16px",
  },
  cardContainer: {
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
  desc: {
    textAlign: "end",
    marginTop: "5px",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "14px",
  },
  dosis: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "16px",
  },
  title2: {
    color: "rgba(0, 0, 0, 0.6)",
  },
};

export default tabStyle;
