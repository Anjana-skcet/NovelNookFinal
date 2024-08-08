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
          alert("Login success");
          navigate('/Home'); // Redirect to dashboard on successful login
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
    <body style={{ backgroundColor: 'beige' }}>
      <table>
        <tr>
          <td>
            <img
              src="https://media.istockphoto.com/id/489591881/photo/opened-magic-book-with-light.jpg?s=612x612&w=0&k=20&c=oZ0JzcnyELIPS5X6FvDmjDh3mdorRdh_b3HLglT6tMI="
              height={720}
              width={780}
              className='im'
            />
          </td>
          <td>
            <div className='login'>
              <Box
                className='aa'
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div className='icon'>
                  <AccountCircleIcon sx={{ fontSize: "80px", color: '' }} />
                  <h3>Sign In</h3>
                </div>
                <div id="a">
                  <form onSubmit={handleSubmit}>
                    <TextField
                      required
                      id="outlined-required"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      label="Username or Email Id"
                    />
                    <br />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      type="password"
                      autoComplete="current-password"
                    />
                    <br />

                    {error && <p>Invalid Username or Password</p>}
                    <Button variant="contained" color='inherit' className='abc' type='submit'>Sign In</Button>
                    <br /><br />
                    <h4>Don't have an Account?
                      <Link to='/Signup'>Create New Account</Link>
                    </h4>
                  </form>
                </div>
              </Box>
            </div>
          </td>
        </tr>
      </table>
    </body>
  );
}
