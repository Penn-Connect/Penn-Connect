import * as React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles, TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import logo from "../assets/svg/logo.svg";
import Header from "../components/global-components/Header.jsx"

import "../assets/css/Login.css";
import { flexbox } from "@mui/system";

export default function MediaCard() {
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
          
          
          <CardContent sx={{ mt: '30px'}}>
            <Typography gutterBottom variant="h4" component="div" align="center">
              Log In
            </Typography>
            <Grid align='center' style={{width: "325px"}}>
              <Grid container direction={"column"} spacing={1}>
                <Grid item>
                  <TextField placeholder='Email' fullWidth required/>
                </Grid>
                <Grid item>
                  <TextField placeholder='Password' fullWidth required/>
                </Grid>
              </Grid>
                <FormGroup>
                  <FormControlLabel control={<Checkbox  />} label="Remember Me" />
                </FormGroup>
                <Button 
                    sx={{
                    bgcolor: 'primary.main',
                    borderRadius: 2,
                    mb: 1.5,
                    }} 
                    fullWidth required
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
                    fullWidth required
                    variant="outlined">
                    FORGOT PASSWORD
                </Button>
            </Grid>
          </CardContent>
        </Card>
        <Button 
          sx={{
            borderRadius: 2,
            color:"#ffffff",
            fontSize: '15px',
            textTransform: 'none',
            }}>
            Join an Upcoming Cohort
          </Button>
      </Grid>
    </Box>
  );
}
