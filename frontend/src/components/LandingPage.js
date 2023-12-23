import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FrontBackground from './FrontBackground';
import LandingPagePaper from './LandingPagePaper';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';

const headingStyle = {
  marginTop: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

function LandingPage() {
  return (
    <>
      {/* <Navbar /> */}
      <FrontBackground />
      <div className="heading" style={headingStyle}>
        <MusicNoteSharpIcon />
        <p style={{ fontSize: '70px' }}>Welcome to Musicer!</p>
        <p style={{ fontSize: '20px' }}>A place to find your next band!</p>
        <LandingPagePaper />
        <Footer/>
      </div>
    </>
  )
}

export default LandingPage;