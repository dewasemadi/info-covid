import { useState } from "react";
import { useRouter } from "next/router";
import { Paper, BottomNavigationAction, BottomNavigation, CssBaseline } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import AddModeratorRoundedIcon from "@mui/icons-material/AddModeratorRounded";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import styles from "./Navigation.style";
const useStyles = makeStyles(styles);

const CustomizedBottomNavigationAction = styled(BottomNavigationAction)`
  .css-imwso6-MuiBottomNavigationAction-label {
    font-size: 12px !important;
  }
  .MuiSlider-selected {
    font-size: 12px !important;
  }
`;

export default function Navigation() {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState(0);

  const navLinks = [
    { title: `Home`, path: "/", icon: <HomeRoundedIcon /> },
    { title: `Statistics`, path: "/statistics", icon: <BarChartRoundedIcon /> },
    { title: `Vaccine`, path: "/vaccine", icon: <BubbleChartRoundedIcon /> },
    { title: `Hospital`, path: "/hospital", icon: <AddModeratorRoundedIcon /> },
  ];

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, display: { md: `none` } }} elevation={4}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}>
        <CssBaseline />
        {navLinks.map(({ title, path, icon }, idx) => (
          <CustomizedBottomNavigationAction
            className={
              router.pathname === `${path}` || router.pathname === `${path}/bed` || router.pathname === `${path}/detail`
                ? classes.active
                : classes.deactive
            }
            label={title}
            icon={icon}
            onClick={() => router.push(`${path}`)}
            key={idx}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
