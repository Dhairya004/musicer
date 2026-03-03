import { Link } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { Home, People, Chat, Settings, Menu, ChevronRight } from '@mui/icons-material';

const Sidebar = ({ isMinimized, setIsMinimized }) => {
  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Paper style={{width: isMinimized ? '64px' : '240px', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 1}} elevation={3}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
        {/* Button to minimize/maximize the sidebar */}
        <IconButton onClick={toggleSidebar}>
          {isMinimized ? <ChevronRight /> : <Menu />}
        </IconButton>
      </div>
      {/* Sidebar content remains visible; only labels hide when minimized */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
              <SectionIcon name="Home" icon={<Home />} isMinimized={isMinimized} />
            </Link>
          </li>
          <li>
            <Link to="find-people" style={{ textDecoration: 'none', color: 'inherit' }}>
              <SectionIcon name="Find People" icon={<People />} isMinimized={isMinimized} />
            </Link> 
          </li>
          <li>
            <Link to="chat" style={{ textDecoration: 'none', color: 'inherit' }}>
              <SectionIcon name="Chat" icon={<Chat />} isMinimized={isMinimized} />
            </Link>
          </li>
          <li>
            <Link to="settings" style={{ textDecoration: 'none', color: 'inherit' }}>
              <SectionIcon name="Settings" icon={<Settings />} isMinimized={isMinimized} />
            </Link>
          </li>
        </ul>
      </div>
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
