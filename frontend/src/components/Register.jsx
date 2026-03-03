import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Register() {
  return (
    <>
      <Paper elevation={3} style={{ padding: '20px', margin: 'auto', marginTop: '50px', height: '450px', width: '650px' }}>
        <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Register</h1>

        <TextField id="outlined-basic" label="Username/email-id" variant="outlined" style={{width: '95%', margin: '10px auto'}} />
        
        <TextField id="outlined-basic" label="Password" variant="outlined" style={{width: '95%', margin: '10px auto'}} />
        
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width: '95%', margin: '10px auto'}} />

        <Button variant="contained" size="large" style={{display: 'block', margin: '20px auto'}}>
          Register
        </Button>
      </Paper>
    </>
  )
}

export default Register;