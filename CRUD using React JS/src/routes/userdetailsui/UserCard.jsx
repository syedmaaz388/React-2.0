import { Box, Typography } from '@mui/material'
import React from 'react'
import EditUserBtn from '../../components/buttons/EditUserBtn'
import DeleteUserBtn from '../../components/buttons/DeleteUserBtn'
import { Link } from 'react-router-dom'
const UserCard = ({item,DeleteUser}) => {
    const SavetolocalStorage = (id,name,email) => {
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }
  return (
    <Box sx={{
        width:"90%",
        display:"flex",
        justifyContent:"space-between",
        boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding:"1rem",
        margin:"1rem",
        alignItems:"center",
      }} >
<Typography sx={{
            color:'rgba(125, 125, 125, 1)',
            fontFamily:"DM Sans",
            fontWeight:"500",
            fontSize:"1rem",
        }}  >{item?.id}</Typography>
        <Typography>{item?.name}</Typography>
        <Typography>{item?.email}</Typography>
        <Box sx={{
          display:"flex",
        }} >
        <Link to = '/edituser'>
        <EditUserBtn SavetolocalStorage={() => SavetolocalStorage(item?.id,item?.name,item?.email)} />
        </Link>
        <DeleteUserBtn DeleteUser={() => DeleteUser(item?.id)} />
        </Box>
      </Box>
  )
}

export default UserCard
