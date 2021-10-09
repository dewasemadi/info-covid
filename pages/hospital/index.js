import Head from "next/head";
import { useState } from "react";
import { Box, Container, ClickAwayListener, Tooltip, IconButton } from "@mui/material";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import Search from "../../components/Search/Search";

export default function Hospital() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Head>
        <title>Hospital</title>
      </Head>
      <Container maxWidth='lg'>
        <Box
          sx={{
            width: {
              md: 500,
            },
          }}>
          <div style={{ display: "flex", justifyContent: "start", marginTop: "10px" }}>
            <h2 style={{ textAlign: "center", fontSize: "18px", margin: "auto 0", fontWeight: 500 }}>Hospital Bed Availability</h2>
            <div style={{ marginLeft: "5px" }}>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={open}
                  onClose={handleTooltipClose}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title='The data displayed may be an error because the data center changes frequently'
                  placement='bottom'
                  arrow>
                  <IconButton aria-label='help' onClick={handleTooltipOpen}>
                    <HelpTwoToneIcon fontSize='small'></HelpTwoToneIcon>
                  </IconButton>
                </Tooltip>
              </ClickAwayListener>
            </div>
          </div>
        </Box>
        <Search />
      </Container>
    </div>
  );
}
