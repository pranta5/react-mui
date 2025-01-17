import { Box, Button } from '@mui/material'
import React from 'react'

const ButtonCom = () => {
  return (
    <Box display="flex" justifyContent="center" my={4}>
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{
        textTransform: "none", 
        boxShadow: 3, 
        padding: "10px 20px", 
        fontSize: "16px", 
        fontWeight: "bold", 
        "&:hover": {
          backgroundColor: "primary.dark", 
          boxShadow: 6, 
        },
        "&:focus": {
          outline: "none", 
          boxShadow: "0 0 0 3px rgba(25, 118, 210, 0.5)",
        },
      }}
    >
      View All
    </Button>
  </Box>
  )
}

export default ButtonCom