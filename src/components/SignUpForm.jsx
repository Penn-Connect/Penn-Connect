import { Alert, Box, Button, Card, Chip, Paper, Container, makeStyles, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import "../assets/css/Form.css";
import logo from "../assets/svg/logo.svg";
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Data from "../assets/json/dummyUser.json";
import Autocomplete from "@material-ui/lab/Autocomplete";

let Dummy = Data.data.results;
let id = 0;
let programming = Dummy[id].programming_lang;


function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    //set project openness preference
    const [booleanVal, setProjectPref] = React.useState('');
    const handleProjectPref = (event) => {
        setProjectPref(event.target.value);
    }

    // const [autoCompleteValue, setAutoCompleteValue] = useState(["Java", "Python"]);

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
            <Card component="form" onSubmit={handleSubmit} sx={{overflow: 'auto', mt: "30px", height: "100%", p: '40px', display: 'flex', flexDirection: 'column', width: '50%', gap: '10px', borderRadius: 5}}>
                
                {/* logo */}
                <div>
                    <Box class="logoBlueBox">
                        <Box class="logoWhiteBox">
                            <img src={logo} style={{ height: '50%', width: '50%'}}/>
                        </Box>
                    </Box>
                </div>


                <Typography variant="h3" textAlign="center">
                    Sign Up
                </Typography>
                {error && <Alert severity='error'>{error}</Alert> }
                
                {/* basic info section */}
                <Grid container spacing={1} direction="column" sx={{px: 15, justifyContent: 'center'}}>
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        Basic Info
                    </Typography>
                    
                        <Grid item>
                            <TextField
                            required
                            id="first-name"
                            label="First Name"
                            type="firstName"
                            style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                            required
                            id="last-name"
                            label="Last Name"
                            type="last-name"
                            style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>
                    
                    {/* links and websites section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        Links and Websites
                    </Typography>
                    
                        <Grid item>
                            <TextField
                            required
                            id="email"
                            label="Email"
                            type="email"
                            inputRef={emailRef}
                            style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                            required
                            id="github"
                            label="GitHub"
                            type="github"
                            style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                            required
                            id="kaggle"
                            label="Kaggle"
                            type="kaggle"
                            style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>  
                        <Grid item>
                            <TextField
                            required
                            id="linkedin"
                            label="LinkedIn"
                            type="linkedin"
                            style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>

                    {/* introduction section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        About Me
                    </Typography>
                        <Grid item>
                            <TextField
                            id="about"
                            label="2 to 3 sentences to introduce yourself!"
                            type="about"
                            style ={{width: '100%', textAlign: 'center', height: '200'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>
                    
                    {/* programming languages section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        Programming Languages
                    </Typography>
                    <div>
                        <Autocomplete
                            multiple
                            freeSolo
                            id="programming-languages"
                            options={["Java", "Python"]}
                            defaultValue={["Java", "Python"]}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="Enter languages"
                            />
                            )}
                        />
                    </div>
                    
                    {/* openness to projects section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        Open to Projects
                    </Typography>
                    <Select
                        labelId='project'
                        id='project'
                        value={booleanVal}
                        onChange={handleProjectPref}
                    >
                        <MenuItem value={"Yes"}>Yes </MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                    </Select>

                    {/* hobbies section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        Hobbies
                    </Typography>
                    <div>
                        <Autocomplete
                            multiple
                            freeSolo
                            id="hobbies"
                            options={["Tennis", "Music"]}
                            defaultValue={["Tennis", "Music"]}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="Enter hobbies"
                            />
                            )}
                        />
                    </div>
                    {/* <Formik
                        onSubmit={values => {
                            console.log(values);
                        }}
                        render={({values}) => {
                            return(
                                <form>
                                    <Field
                                    name={'hobbies'}    
                                    component ={ChipInput}
                                    />
                                </form>
                            )
                        }}
                    /> */}
               
                    
                    {/* industries section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        Industries
                    </Typography>
                    <div>
                        <Autocomplete
                            multiple
                            freeSolo
                            id="industries"
                            options={["Healthcare", "Tech"]}
                            defaultValue={["Healthcare", "Tech"]}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="Enter industry"
                            />
                            )}
                        />
                    </div>

                    {/* password section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                    Create Password
                    </Typography>

                    <Grid item>
                    <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    inputRef={passwordRef}
                    style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                    />
                    </Grid>
                    <Grid item>
                    <TextField
                    required
                    id="password-confirm"
                    label="Confirm Password"
                    type="password"
                    inputRef={passwordConfirmationRef}
                    style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                    />
                    </Grid>
                </Grid>
                
                <Box textAlign='center'>
                    <Button type="submit" 
                        sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: 2, width: '60%', p: '10px', mt: '10px', justifyContent: 'center'}} 
                        disabled={loading} onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Card>
            
            <Typography variant="body1" color="white" sx={{ mt: '10px' }}>
                Already have an account? 
                <Link style={{color: 'white'}} to="/login"> Log In </Link>
            </Typography>

        </Box>
        
    )
}

export default SignUp;