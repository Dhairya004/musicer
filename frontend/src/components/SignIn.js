import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" size="large" onClick={handleOpen} style={{textTransform: 'none'}}>Sign In</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" style={{ textAlign: 'center' }}>
            Sign In
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, mb: 4, textAlign: 'center' }}>
            Sign into your musicer account. Already have an account? Click <Link to="/register">here.</Link>
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Usename/Email ID
          </Typography>
          <TextField id="filled-basic" label="Usename/Email ID" variant="filled" style={{width: '97%'}}/>
          <Typography sx={{ my: 2 }}>
            Password
          </Typography>
          <TextField id="filled-basic" label="Password" variant="filled" style={{width: '97%'}}/>
        </Box>
      </Modal>
    </div>
  );
}