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
            <Card component="form" onSubmit={handleSubmit} sx={{overflow: 'auto', mt: "30px", height: "100%", p: '40px', display: 'flex', flexDirection: 'column', width: '50%', gap: '5px', borderRadius: 5}}>
                
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

                {error && <Alert severity='error'>{error}</Alert> }
                
                {/* basic info section */}
                <Grid container spacing={1} direction="column" sx={{px: 5, justifyContent: 'center'}}>
                    <Typography variant="h4" textAlign="left">
                        Tell Us More About Yourself
                    </Typography>
                    <Typography gutterBottom variant="h6" sx={{pt: 2}}>
                        Basic Info
                    </Typography>
                    
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2}}>
                        <TextField
                        required
                        id="first-name"
                        label="First Name"
                        type="firstName"
                        inputRef={firstName}
                        variant="outlined"
                        />
                        <TextField
                        required
                        id="last-name"
                        label="Last Name"
                        type="last-name"
                        variant="outlined"
                        inputRef={lastName}
                        />
                    </Box>

                    {/* links and websites section */}
                    <Typography gutterBottom variant="h6" sx={{pt: 2}}>
                        Links and Websites
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2}}>
                        <TextField
                        id="email"
                        label="Email"
                        type="email"
                        inputRef={emailRef}
                        style ={{width: '100%'}}  
                        />
                        <TextField
                        id="github"
                        label="GitHub"
                        type="github"
                        inputRef={github}
                        style ={{width: '100%', textAlign: 'center'}} 
                        />
                        <TextField
                        id="kaggle"
                        label="Kaggle"
                        type="kaggle"
                        inputRef={kaggle}
                        style ={{width: '100%', textAlign: 'center'}} 
                        />
                        <TextField
                        id="linkedin"
                        label="LinkedIn"
                        type="linkedin"
                        inputRef={linkedin}
                        style ={{width: '100%'}} 
                        />
                    </Box>

                    {/* introduction section */}
                    <Typography gutterBottom variant="h6" sx={{pt: 2}}>
                        About Me
                    </Typography>
                        <Grid item>
                            <TextField
                            id="about"
                            label="2 to 3 sentences to introduce yourself!"
                            type="about"
                            multiline
                            rows={3}
                            style ={{width: '100%', textAlign: 'center', height: '200'}}
                            inputRef={bio}
                            />
                        </Grid>
                    

                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2}}>
                        <div>
                            {/* programming languages section */}
                            <Typography gutterBottom variant="h6" sx={{pt: 2}}>
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
                                    />
                                    )}
                                />
                            </div>
                        </div>

                        <div>
                            {/* hobbies section */}
                            <Typography gutterBottom variant="h6" sx={{pt: 2}}>
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
                                />
                                )}/>
                            </div>
                        </div>

                        <div>
                            {/* industries section */}
                            <Typography gutterBottom variant="h6">
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
                                    />
                                    )}
                                />
                            </div>
                        </div>

                        <div>
                            {/* Classes Completed */}
                            <Typography gutterBottom variant="h6">
                                Classes Completed
                            </Typography>
                            <div>
                                <Autocomplete
                                    multiple
                                    freeSolo
                                    id="classes"
                                    options={["CIT591", "CIT592"]}
                                    defaultValue={["CIT591", "CIT592"]}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                    />
                                    )}
                                />
                            </div>
                        </div>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2}}>
                        {/* openness to projects section */}
                        <div>
                            <Typography gutterBottom variant="h6" sx={{pt: 2}}>
                                Open to Projects
                            </Typography>
                            <Select
                                labelId='project'
                                id='project'
                                value={booleanVal}
                                onChange={handleProjectPref}
                                inputRef={project}
                                style={{width: '100%'}}
                            >
                                <MenuItem value={"Yes"}>Yes </MenuItem>
                                <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                        </div>

                        {/* student status section */}
                        <div>
                            <Typography gutterBottom variant="h6" sx={{pt: 2}}>
                                Student Status
                            </Typography>
                            <Select
                                labelId='status'
                                id='statis'
                                value={booleanVal}
                                onChange={handleProjectPref}
                                inputRef={project}
                                style={{width: '100%'}}
                            >
                                <MenuItem value={"Student"}>Student </MenuItem>
                                <MenuItem value={"Alumni"}>Alumni</MenuItem>
                            </Select>
                        </div>
                    </Box>
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