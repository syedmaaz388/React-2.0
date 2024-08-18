import { Button } from '@mui/material'
import React from 'react'

const ViewDetailsBtn = () => {
  return (
    <Button sx={{
        backgroundColor: 'rgba(202, 166, 74, 1)',
        color: "white",
        fontSize: "1rem",
        padding: '0.2rem 1.2rem',
        fontFamily: "DM Sans",
        textTransform: "capitalize",
        borderRadius:"0.5rem",
        margin:"1rem",
        '&:hover': {
          backgroundColor: 'rgba(202, 166, 74, 1)',
        }
    }}>
    Create
    </Button>
  )
}

export default ViewDetailsBtn
