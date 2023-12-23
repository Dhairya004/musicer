import React, { useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Register() {

  const UserData = {
    fullname,
    email,
    username,
    password,
    age,
    gender,
    role
  };

  const registerUser = async (userData) => {
    try {
      const response = await axios.post('/api/register', userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Call registerUser with form data when the form is submitted.


  const [page, setPage] = useState(1);
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [role, setRole] = useState();


  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper style={{ position: 'relative', width: '90%', padding: 16 }}>
        {page === 1 && (
          <>
            <Typography variant="h4" component="h1" align="center">
              Register
            </Typography>
            <form method="POST" onSubmit={handleNextPage} style={{ margin: '10px' }}>
              <TextField
                label="Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" type="submit" style>
                Next
              </Button>
            </form>
          </>
        )}
        {page === 2 && (
          <>
            <Typography variant="h6" component="h1" align="center">
              Complete your registration
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Musical Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </form>
          </>
        )}
      </Paper>
    </div>
  );
}

export default Register;