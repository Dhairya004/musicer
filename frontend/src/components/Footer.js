import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Paper style={{ width: '100%', background: 'lightgrey', padding: '40px 0px 30px 0px' }}>
      <Typography variant="body1" align="center">
        Copyright Musicer 2023. All rights reserved.
      </Typography>
    </Paper>
  );
}

export default Footer;
