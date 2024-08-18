import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import ViewDetailsBtn from '../../components/buttons/ViewDetailsBtn'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserCard from './UserCard'





const UserDetailsUI = () => {

  const [data,setData] = useState([]);


  function getData(){
    axios.get("https://66c199a1f83fffcb5879b258.mockapi.io/crud-app")
    .then((res) => {
       console.log(res.data)
       setData(res.data)
    })
  }


  const DeleteUser = (id) => {
    axios.delete(`https://66c199a1f83fffcb5879b258.mockapi.io/crud-app/${id}`)
    .then(() => {
      getData()
    })
    
}

  useEffect(() => {
    getData()
  },[])


  return (
    <Box>
      <Box sx={{
        width:"100%"
    }} >
    <Box sx={{
        display:"flex",
        padding:'1rem',
        alignItems:'center',
      }} >

      <Box sx={{
        height:"3.6rem",
      
      }} >
        <Typography sx={{
              fontFamily:"DM Sans",
              fontSize:"2.4rem",
              fontWeight:"500",
        }} >Read Operation</Typography>

      </Box>
      </Box>
      <Link to="/" >
      <ViewDetailsBtn/>
      </Link>
      <Box sx={{
        width:"90%",
        display:"flex",
        justifyContent:"space-between",
        padding:"1rem",
        margin:"0rem 1rem",
        borderBottom:'2px solid rgba(235, 239, 242, 1)',
      }} >
        <Typography sx={{
            color:'rgba(125, 125, 125, 1)',
            fontFamily:"DM Sans",
            fontWeight:"500",
            fontSize:"1rem",
        }} >#</Typography>
        <Typography sx={{
            color:'rgba(125, 125, 125, 1)',
            fontFamily:"DM Sans",
            fontWeight:"500",
            fontSize:"1rem",
        }}  >Name</Typography>
        <Typography sx={{
            color:'rgba(125, 125, 125, 1)',
            fontFamily:"DM Sans",
            fontWeight:"500",
            fontSize:"1rem",
        }}  >Email</Typography>
        <Box sx={{
          display:"flex",
        }} >
        <Typography sx={{
            color:'rgba(125, 125, 125, 1)',
            fontFamily:"DM Sans",
            fontWeight:"500",
            fontSize:"1rem",
            width:"12rem",
        }}  >Edit</Typography>
           <Typography sx={{
            color:'rgba(125, 125, 125, 1)',
            fontFamily:"DM Sans",
            fontWeight:"500",
            fontSize:"1rem",
            width:"11rem",

        }}  >Delete</Typography>
        </Box>
         
      </Box>
     
     {data.map((item) => {
      return(
        <UserCard key={item.id}  item={item} DeleteUser={DeleteUser} />
      )
     })}

    </Box>
    </Box>
  )
}

export default UserDetailsUI
