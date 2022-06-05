import { Alert, Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        //Check if password and confirm password is the same
        if(passwordRef.current.value !== passwordConfirmationRef.current.value) {
            //if not return error
            return setError("Password do not match")
        }

        //try to login
        try {
            //resets error if successful
            setError("")
            //turn Loading True so that there is no duplicate submissions
            setLoading(true)
            //signup using firebase
            await signup(emailRef.current.value, passwordRef.current.value)
            //navigate to Dashboard after success
            navigate("/")
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
        
    }

    return (
        <Box sx={{ bgcolor: 'primary.main', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Card component="form" onSubmit={handleSubmit} sx={{ p: '40px', display: 'flex', flexDirection: 'column', width: '300px', gap: '10px'}}>
                
                <Typography variant="h3" textAlign="center">
                    Sign Up
                </Typography>
                {error && <Alert severity='error'>{error}</Alert> }
                
                <TextField
                required
                id="email"
                label="Email"
                type="email"
                inputRef={emailRef}
                />
                
                <TextField
                required
                id="password"
                label="Password"
                type="password"
                inputRef={passwordRef}
                />
                
                <TextField
                required
                id="password-confirm"
                label="Confirm Password"
                type="password"
                inputRef={passwordConfirmationRef}
                />
                
                <Button type="submit" sx={{ bgcolor: 'primary.main', color: 'white', p: '10px', mt: '10px'}} disabled={loading} onClick={handleSubmit}>
                    Submit
                </Button>

            </Card>
            
            <Typography variant="body1" color="white" sx={{ mt: '10px' }}>Already have an account? <Link to="/login">Log In</Link></Typography>

        </Box>
        
    )
}

export default SignUp;