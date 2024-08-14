import * as React from 'react';
import Box from '@mui/material/Box';
import './Login.css';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import addservices from '../Services/addservices';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormPropsTextFields() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const users = await addservices.fetchUsers(); // Fetch users using the service
      console.log("Users from API:", users); // Log the users array

      const user = users.find((user) => user.username === name);
      console.log("User found:", user);

      if (user) {
        if (user.password === pass) {
          // Store the username in localStorage
          localStorage.setItem('loggedInUserName', user.username);

          // Store the authentication status
          localStorage.setItem('isAuthenticated', 'true');
          
          navigate('/Home'); // Redirect to Home page on successful login
          setError(false);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(true);
    }
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '35ch' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          noValidate
          autoComplete="off"
        >
          <div className='icon'>
            <AccountCircleIcon sx={{ fontSize: "80px", color: '' }} />
            <h3>Sign In</h3>
          </div>
          <div id="a">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField
                required
                id="outlined-required"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Username or Email Id"
              />
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                autoComplete="current-password"
                style={{ marginTop: '10px' }} // Reduced margin between fields
              />

              {error && <p>Invalid Username or Password</p>}
              <Button variant="contained" color='inherit' style={{ backgroundColor: '#1e56c7', color: 'white', marginTop: '15px' }} type='submit'>Sign In</Button>
              <br /><br />
              <h5 style={{ color: 'black', fontSize: '21px' }}>Don't have an Account?
                <Link to='/Signup' style={{ fontSize: '21px', marginRight: '10px' }}>&nbsp;Create New Account</Link>
              </h5>
            </form>
          </div>
        </Box>
      </div>
    </div>
  );
}
