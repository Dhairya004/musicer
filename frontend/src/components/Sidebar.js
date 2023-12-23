import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Home, People, Chat, Settings, Menu, ChevronLeft } from '@mui/icons-material';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Paper
      style={{
        width: isMinimized ? '56px' : '240px',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        transition: 'width 0.3s',
        zIndex: 1,
      }}
      elevation={3}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
        <IconButton onClick={toggleSidebar}>
          {isMinimized ? <ChevronLeft /> : <Menu />}
        </IconButton>
      </div>
      {!isMinimized && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <SectionIcon name="Home" icon={<Home />} isMinimized={isMinimized} />
          <SectionIcon name="Find People" icon={<People />} isMinimized={isMinimized} />
          <SectionIcon name="Chat" icon={<Chat />} isMinimized={isMinimized} />
          <SectionIcon name="Settings" icon={<Settings />} isMinimized={isMinimized} />
        </div>
      )}
    </Paper>
  );
};

const SectionIcon = ({ name, icon, isMinimized }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '18px' }}>
      {icon}
      {!isMinimized && <span style={{ marginLeft: '8px' }}>{name}</span>}
    </div>
  );
};

export default Sidebar;
