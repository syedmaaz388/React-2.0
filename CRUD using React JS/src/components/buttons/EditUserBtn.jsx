import { Button } from '@mui/material'
import React from 'react'

const EditUserBtn = ({SavetolocalStorage}) => {
  return (
    <Button sx={{
        backgroundColor: 'rgba(202, 166, 74, 1)',
        color: "white",
        fontSize: "0.8rem",
        width:"10rem",
        height:"2.2rem",
        fontFamily: "DM Sans",
        textTransform: "capitalize",
        borderRadius:"0.5rem",
        '&:hover': {
          backgroundColor: 'rgba(202, 166, 74, 1)',
        }
    }} onClick={SavetolocalStorage} >
      Edit User
    </Button>
  )
}

export default EditUserBtn
