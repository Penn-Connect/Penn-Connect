import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';


function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    return (
        <Box sx={{ bgcolor: 'primary.main', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ p: '40px', display: 'flex', flexDirection: 'column', width: '300px', gap: '20px'}}>
                <Typography variant="h3" textAlign="center">
                    Sign Up
                </Typography>
                
                <TextField
                required
                id="email"
                label="Email"
                type="email"
                ref={emailRef}
                />
                
                <TextField
                required
                id="password"
                label="Password"
                type="password"
                autoComplete='current-password'
                ref={passwordRef}
                />
                
                <TextField
                required
                id="password-confirm"
                label="Confirm Password"
                type="password"
                autoComplete='current-password'
                ref={passwordConfirmationRef}
                />
                <Button type='submit' sx={{ bgcolor: 'primary.main', color: 'white' }}>Submit</Button>
            </Card>
            <div>
                
            </div>
        </Box>
        
    )
}

export default SignUp;