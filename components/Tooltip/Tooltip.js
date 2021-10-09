import { useState } from "react";
import { ClickAwayListener, Tooltip, IconButton } from "@mui/material";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";

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
          <HelpTwoToneIcon fontSize='small'></HelpTwoToneIcon>
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}
