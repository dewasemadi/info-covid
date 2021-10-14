import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={matches ? `vertical-tabpanel-${index}` : `simple-tabpanel-${index}`}
      aria-labelledby={matches ? `vertical-tab-${index}` : `simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
