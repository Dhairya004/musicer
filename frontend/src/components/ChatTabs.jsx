import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ChatTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        style={{marginTop: '40px'}}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '400px', height: '100vh' }}
      >
        <Tab label="Dhairya" {...a11yProps(0)} style={{textTransform: 'capitalize'}}/>
        <Tab label="Joe" {...a11yProps(1)} style={{textTransform: 'capitalize'}}/>
        <Tab label="Jack" {...a11yProps(2)} style={{textTransform: 'capitalize'}}/>
        <Tab label="Susan" {...a11yProps(3)} style={{textTransform: 'capitalize'}}/>
        <Tab label="Rachel" {...a11yProps(4)} style={{textTransform: 'capitalize'}}/>
        <Tab label="Sarah" {...a11yProps(5)} style={{textTransform: 'capitalize'}}/>
        <Tab label="Emma" {...a11yProps(6)} style={{textTransform: 'capitalize'}}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        Dhairya
      </TabPanel>
      <TabPanel value={value} index={1}>
        Joe 
      </TabPanel>
      <TabPanel value={value} index={2}>
        Jack
      </TabPanel>
      <TabPanel value={value} index={3}>
        Susan
      </TabPanel>
      <TabPanel value={value} index={4}>
        Rachel
      </TabPanel>
      <TabPanel value={value} index={5}>
        Sarah
      </TabPanel>
      <TabPanel value={value} index={6}>
        Emma
      </TabPanel>
    </Box>
  );
}