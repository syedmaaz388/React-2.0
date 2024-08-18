import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Createuser = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate(); // Initialize the navigate function
    const  headers =  {"Access-Control-Allow-Origin": "*"};
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://66c199a1f83fffcb5879b258.mockapi.io/crud-app",{
            name:name,
            email:email,
            headers,
        }).then(() => {
            // Navigate to /userdetails after the API call is successful
            navigate('/userdetails');
          })
          .catch(error => {
            console.error("There was an error creating the user!", error);
          });
    };
  return (
    <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center vertically
    }}>
      <Box sx={{
        width: '22rem',
        margin: '5% 0%',
      }}>
        <Typography sx={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '2rem', // Add some space below the title
        }}>
          Create User
        </Typography>

        <Box component="form" sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <TextField 
            label="Name" 
            variant="outlined" 
            sx={{ width: '100%', marginBottom: '1.5rem' }} 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField 
            label="Email" 
            variant="outlined" 
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
         
          <Button variant="contained" onClick={handleSubmit} color="primary" sx={{ width: '100%' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Createuser;
