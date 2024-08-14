import * as React from 'react';
import Box from '@mui/material/Box';
import './Signup.css';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addservices from '../Services/addservices'; // Import the addservices

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await addservices.registerUser(name, email, password); // Use the registerUser function
      toast.success("Registration successful!", {
        onClose: () => navigate('/')
      });
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred during registration. Please try again.");
    }
  }

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/340/7/desktop-wallpaper-book-hq-aesthetic-books.jpg)', // Replace with your image URL
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the image
        backgroundAttachment: 'fixed',
      }}
    >
      <ToastContainer />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with opacity
          padding: 3,
          borderRadius: 2,
          boxShadow: 3
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className='icon'>
          <h1>Registration Page</h1>
        </div>
        <div id="a">
          <TextField
            required
            id="outlined-required"
            label="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Email Id"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <br />
          <TextField
            required
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="current-password"
          />
          <br /><br />
          <Button type="submit" variant='contained' color='inherit' className='abc' style={{backgroundColor:'#1e56c7',color:'white'}}>Register</Button>
          <br /><br />
          <h4>Already have an Account? <Link to='/'>Sign In</Link></h4>
        </div>
      </Box>
    </div>
  );
}
