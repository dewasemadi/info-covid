import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function A11yProps(index) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return {
    id: matches ? `vertical-tab-${index}` : `simple-tab-${index}`,
    "aria-controls": matches ? `vertical-tabpanel-${index}` : `simple-tabpanel-${index}`,
  };
}
