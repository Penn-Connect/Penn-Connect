import { Alert, Box, Button, Card, Chip, Paper, Container, makeStyles, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
// import "../assets/css/Form.css";
import logo from "../assets/svg/logo.svg";
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Data from "../assets/json/dummyUser.json";
import Autocomplete from "@mui/material/Autocomplete";

import {
    getFirestore,
    addDoc,
    collection
  } from 'firebase/firestore';

let Dummy = Data.data.results;
let id = 0;
let programming = Dummy[id].programming_lang;


function SignUp() {
    const db = getFirestore()
    const emailRef = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const github = useRef()
    const kaggle = useRef()
    const linkedin = useRef()
    const bio = useRef()
    const programs = useRef([])
    const project = useRef()
    const { currentUser } = useAuth();

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

        try {
            //add user firstname and lastname to database collection "profiles"
            await addDoc(collection(db, 'profiles'), {
                timestamp: Date.now(),
                userId: currentUser.uid,
                email: currentUser.email,
                firstName: firstName.current.value,
                github: github.current.value,
                // { kaggle.current.value && kaggle: kaggle.current.valuev }, 
                kaggle: kaggle.current.value,
                linkedin: linkedin.current.value,
                bio: bio.current.value,
                project: project.current.value,
            });

            navigate("/")
        } catch {
            setError("Failed to create profile")
        }

        //Return false to avoid redirect
        return ;
    }

    return (
        <Box sx={{ bgcolor: 'primary.main', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Card component="form" onSubmit={handleSubmit} sx={{overflow: 'auto', mt: "30px", height: "100%", p: '40px', display: 'flex', flexDirection: 'column', width: '50%', gap: '10px', borderRadius: 5}}>
                
                <div>
                    {currentUser && currentUser.email}
                </div>
                {/* logo */}
                {/* <div>
                    <Box class="logoBlueBox">
                        <Box class="logoWhiteBox">
                            <img src={logo} style={{ height: '50%', width: '50%'}}/>
                        </Box>
                    </Box>
                </div> */}


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
                            inputRef={firstName}
                            style ={{width: '100%', textAlign: 'center'}} inputProps={{ style: {textAlign: 'center'}}} 
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                            required
                            id="last-name"
                            label="Last Name"
                            type="last-name"
                            inputRef={lastName}
                            style ={{width: '100%'}}
                            />
                        </Grid>
                    

                    {/* links and websites section */}
                    <Typography gutterBottom variant="h5" sx={{pt: 3}}>
                        Links and Websites
                    </Typography>
                    
                        <Grid item>
                            <TextField
                            id="email"
                            label="Email"
                            type="email"
                            inputRef={emailRef}
                            style ={{width: '100%'}}  
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                            id="github"
                            label="GitHub"
                            type="github"
                            inputRef={github}
                            style ={{width: '100%', textAlign: 'center'}} 
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                            id="kaggle"
                            label="Kaggle"
                            type="kaggle"
                            inputRef={kaggle}
                            style ={{width: '100%', textAlign: 'center'}} 
                            />
                        </Grid>  
                        <Grid item>
                            <TextField
                            id="linkedin"
                            label="LinkedIn"
                            type="linkedin"
                            inputRef={linkedin}
                            style ={{width: '100%'}} 
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
                            multiline
                            rows={4}
                            style ={{width: '100%', textAlign: 'center', height: '200'}}
                            inputRef={bio}
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
                            inputRef={programs}
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
                        inputRef={project}
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

                    
                </Grid>
                
                <Box textAlign='center'>
                    <Button type="submit" 
                        sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: 2, width: '60%', p: '10px', mt: '10px', justifyContent: 'center'}} 
                        disabled={loading} onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Card>
            
        </Box>
        
    )
}

export default SignUp;