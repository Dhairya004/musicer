import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ToggleButton from './ToggleButton';
import SignIn from './SignIn';

function FrontBackground() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper style={{ position: 'relative', width: '100%', padding: 0 }}>
          <img src="profile images/new_bg.jpg" alt="Your Image" style={{ width: '100%' }} />
          <div id="navbar" style={{border: '10px sold red', height: '50px', position: 'absolute', top: '0', display: 'flex', alignItems: 'center'}}>
            <Typography style={{ position: 'relative', top:'6px', left:'8px', fontSize: '50px', color: 'white' }}>
              Musicer
            </Typography>
            <Typography style={{ position: 'relative', top: '14px', left:'120px',fontSize: '30px', color: 'white' }}>
              About Us
            </Typography>
            <Typography style={{ position: 'relative', top: '14px', left:'180px',fontSize: '30px', color: 'white' }}>
              Support
            </Typography>

          </div>
          <Typography variant="body2" style={{ position: 'absolute', top: '40%', left: '40%', fontSize: '40px', color: 'white' }}>
          Find your next band.
          </Typography>
          <div style={{ position: 'absolute', top: 16, right: 96 }}>
            <SignIn/>
          </div>
          <div style={{ position: 'absolute', top: 12, right: 16 }}>
            <ToggleButton/>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default FrontBackground;