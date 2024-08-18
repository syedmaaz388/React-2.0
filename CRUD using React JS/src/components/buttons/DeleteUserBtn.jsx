import { Button } from '@mui/material'
import React from 'react'

const DeleteUserBtn = ({DeleteUser}) => {
  return (
    <Button sx={{
        backgroundColor: 'rgba(218, 64, 64, 1)',
        color: "white",
        fontSize: "0.8rem",
        width:"10rem",
        height:"2.2rem",
        fontFamily: "DM Sans",
        textTransform: "capitalize",
        borderRadius:"0.5rem",
        marginLeft:"3rem",
        '&:hover': {
          backgroundColor: 'rgba(218, 64, 64, 1)',
        }
    }} onClick={DeleteUser} >
      Delete User
    </Button>
  )
}

export default DeleteUserBtn
