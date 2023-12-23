import React from 'react';
import Paper from '@mui/material/Paper';

const pageContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '3% 6% 3% 6%'
};

function LandingPagePaper() {
  return (
    <>
      <Paper elevation={2} style={{ width: '90%', marginBottom: '30px' }}>
        <div className="page-contents" style={pageContentStyle}>
          <div className="page-content-icon" style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <img src="./assets/registration_icon.png" alt="Register" style={{ width: '100px', marginBottom: '20px' }} />
            <h5 style={{textAlign: 'center'}}>Create your account</h5>
          </div>
          <div className="page-content-icon" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <img src="./assets/meet_icon.png" alt="Meet" style={{ width: '100px', marginBottom: '20px' }} />
            <h5 style={{textAlign: 'center'}}>Chat</h5>
          </div>
          <div className="page-content-icon">
            <img src="./assets/music_band.png" alt="Register" style={{ width: '150px', marginBottom: '40px' }} />
            <h5 style={{textAlign: 'center'}}>Collaborate</h5>
          </div>
        </div>
      </Paper>

    </>
  )
}

export default LandingPagePaper;