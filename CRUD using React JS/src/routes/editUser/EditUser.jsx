import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {

    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");


    useEffect(() => {
      setId(localStorage.getItem("id"))
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))
    },[])

    const navigate = useNavigate(); // Initialize the navigate function


    const handleUpdate = () => {
       axios.put(`https://66c199a1f83fffcb5879b258.mockapi.io/crud-app/${id}`,
        {
        name:name,
        email:email,
       }
    ).then(() => {
        navigate('/userdetails');
    })
    }
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
          Edit User
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
          <Button onClick={handleUpdate} variant="contained" color="primary" sx={{ width: '100%' }}>
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default EditUser;
