import BarChart from '../components/Chart/Bar';
import Summary from '../components/Summary/Summary'
import { Container, ClickAwayListener, Tooltip, IconButton } from '@mui/material'
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import { useState } from 'react';

export default function Statistics() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };


  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Covid-19 Cases in Indonesia</h2>
        <Summary />

        <dix style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }} >
          <h2 style={{ textAlign: 'center' }}>Statistics by Provinces</h2>
          <div style={{ marginLeft: '5px' }}>
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
                title="Use PC to get better experience in reading charts"
                placement="top"
                arrow>
                <IconButton aria-label="help" onClick={handleTooltipOpen}>
                  <HelpTwoToneIcon></HelpTwoToneIcon>
                </IconButton>
              </Tooltip>
            </ClickAwayListener>
          </div>
        </dix>
        <BarChart />
      </Container>
    </div>
  );
}
