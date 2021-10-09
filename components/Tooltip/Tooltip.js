import { useState } from "react";
import { ClickAwayListener, Tooltip, IconButton } from "@mui/material";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

export default function MyTooltip({ place, title }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
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
        title={title}
        placement={place}
        arrow>
        <IconButton aria-label='help' onClick={handleTooltipOpen}>
          <HelpRoundedIcon fontSize='small'></HelpRoundedIcon>
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}
