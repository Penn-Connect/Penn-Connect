import React, {useState, useRef} from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, makeStyles, TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import logo from "../assets/svg/logo.svg";
import Header from "../components/global-components/Header.jsx"

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

import "../assets/css/Login.css";
import { flexbox } from "@mui/system";

export default function MediaCard() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate= useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    //try to login
    try {
        //resets error if successful
        setError("")
        //turn Loading True
        setLoading(true)
        //login using firebase
        await login(emailRef.current.value, passwordRef.current.value)
        //redirect to Dashboard
        navigate("/")
    } catch {
        setError("Failed to Login")
    }
    setLoading(false)
  }

  // const styles = useStyles();
  return (
    <Box class ="box">
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        {/* <CardMedia
        // style='text-align:center'
        // style={{ height: "100px", paddingTop: "2%" }}
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        justify="center"
        component="img"
        alt="penn logo"
        margin='auto'
        borderRadius= '50%'
        paddingTop= '81.25%'
        src={logo}
        /> */}
        
        <Card sx={{ maxWidth: 375, borderRadius: 5, p: '20px 20px', position: 'relative', overflow: 'visible'}}>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: '130px', width: '130px', borderRadius: "50%", position: "absolute", top: '-75px', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', bgcolor: '#011f5b'}}>
          <Box sx={{
              bgcolor: 'white',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={logo} style={{ height: '60%', width: '60%'}}/>
            </Box>
        </Box>
          
          
          <CardContent component="form" onSubmit={handleSubmit} sx={{ mt: '30px'}}>
            <Typography gutterBottom variant="h4" component="div" align="center">
              Log In
            </Typography>
            
            {error && <Alert severity='error' sx={{ mb: '20px' }}>{error}</Alert> }

            <Grid align='center' style={{width: "325px"}}>
              <Grid container direction={"column"} spacing={1}>
                <Grid item>
                  <TextField
                  required
                  label="Email"
                  type="email"
                  fullWidth 
                  inputRef={emailRef}
                  />
                </Grid>
                
                <Grid item>
                  <TextField
                    required
                    type="password" 
                    fullWidth 
                    label="Password"
                    inputRef={passwordRef}
                  />
                </Grid>
              </Grid>
                <FormGroup>
                  <FormControlLabel control={<Checkbox  />} label="Remember Me" />
                </FormGroup>
                <Button
                    type="submit"
                    sx={{
                    bgcolor: 'primary.main',
                    borderRadius: 2,
                    mb: 1.5,
                    }} 
                    fullWidth
                    variant="contained">
                    LOG IN
                </Button>
                {/* <Button fullWidth required variant="outlined">FORGOT PASSWORD</Button> */}
                <Button 
                    sx={{
                    borderRadius: 2,
                    color:"secondary",
                    borderColor: "secondary",
                    }} 
                    fullWidth
                    variant="outlined">
                    FORGOT PASSWORD
                </Button>
            </Grid>
          </CardContent>
        </Card>
        <Link to="/sign-up" 
          style={{textDecoration: 'none',color:"#ffffff",
            fontSize: '15px',
            textTransform: 'none',
            marginTop: '10px'
          }}> Join an Upcoming Cohort
          </Link>
      </Grid>
    </Box>
  );
}
