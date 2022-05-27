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
import Avatar from '@mui/material/Avatar';

export default function MediaCard() {
  // const styles = useStyles();
  return (
    <Box bgcolor = "#011f5b">
      <Grid container direction="column" alignItems="center" justify="center">
        {/* <CardMedia
        // style='text-align:center'
        // style={{ height: "100px", paddingTop: "2%" }}
        justify="center"
        component="img"
        alt="penn logo"
        margin='auto'
        src={logo}
        /> */}
        <Avatar alt="Penn logo" component ="image" src="logo" />
        <Card sx={{ maxWidth: 375, borderRadius: 5}}>
          <CardContent >
            <Typography gutterBottom variant="h6" component="div" align="center">
              Log In
            </Typography>
            <Grid align='center'>
                <TextField placeholder='Email' fullWidth required/>
                <TextField placeholder='Password' fullWidth required/>
                <FormGroup>
                  <FormControlLabel control={<Checkbox  />} label="Remember Me" />
                </FormGroup>
                <Button 
                    sx={{
                    bgcolor: '#011f5b',
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
                    color:"#990000",
                    borderColor: "#990000",
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
            Join an upcoming cohort
          </Button>
      </Grid>
    </Box>
  );
}
