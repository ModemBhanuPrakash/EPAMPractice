import { Button, Paper, Stack, TextField } from '@mui/material'
import React from 'react'
import '../Styles/reg.css'

const Registration = () => {
  return (
    <div className='div'>
        <Paper elevation={12} style={{border:'2px solod',  borderColor:"#D24545"  }}>
        <Stack spacing={3}>
            <TextField required label="Fullname"/>
            <TextField required label="Email"/>
            <TextField label="Contact Number"/>
            <TextField label="Address"/>
            <Button variant='contained'>Submit</Button>

                </Stack>
        </Paper>
    </div>
  )
}

export default Registration
