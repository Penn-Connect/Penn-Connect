import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../assets/css/User.css";
import Avatar from "@mui/material/Avatar";

import ClassBadge from "./user-components/ClassBadge.jsx";
import SocialBadge from "./user-components/SocialBadge.jsx";
import InfoSection from "./user-components/InfoSection.jsx";

import Header from "./global-components/Header"
import Data from "../assets/json/dummyUser.json";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#011F5B" : "#308fe8",
  },
}));

function CircularProgressWithLabel({ value }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        className="offCircle"
        variant="determinate"
        value={100}
      />
      <CircularProgress
        className="mainCircle"
        variant="determinate"
        value={value * 10}
      />
      <Box
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {/* {`${Math.round(props.value)}%`} */}
          {`${value}/10`}
        </Typography>
      </Box>
    </Box>
  );
}


let Dummy = Data.data.results;
let id = 0;
let name = `${Dummy[id].name.firstName} ${Dummy[id].name.lastName}`;
let location = `${Dummy[id].address.street}, ${Dummy[id].address.city}, ${Dummy[id].address.country}`;
let social = Dummy[id].social;
let about = Dummy[id].bio;
let classes = Dummy[id].class_done;
let open = Dummy[id].colab_open;
let programming = Dummy[id].programming_lang;
let industry = Dummy[id].industry;
let hobby = Dummy[id].hobbies_and_activities;


export default function User() {
  return (
    <div>
    <Header id="header" name={name}/>
    
    <Box id="userContainer" sx={{ flexGrow: 1 }}>
      <Grid className="userGridsRow" container spacing={3}>
        {/* Left */}
        <Grid className="userGrid" item xs={7}>
          <Grid className="userGridsCol" container spacing={3}>
            <Grid className="card" item>
              <Item className="flexBoxRow">
                <section className="headerCard flexBoxRow center">
                  <div className="flexBoxRow size5">
                    <Avatar className="avatar" {...stringAvatar(name)} />
                    <div className="profile flexBoxCol left">
                      <div className="name">{name}</div>
                      <div className="location">{location}</div>
                    </div>
                  </div>

                  <div className="social flexBoxRow">
                    {social.map((ele) => {
                      return <SocialBadge key={ele} svg={ele} />;
                    })}
                  </div>
                </section>
              </Item>
            </Grid>
            <Grid className="card" item>
              <Item>
                <section className="flexBoxCol left">
                  <div className="about">About Me</div>
                  <div className="aboutDesc">{about}</div>
                </section>
              </Item>
            </Grid>
            <Grid className="card" item>
              <Item>
                <section id="courseBox" className="flexBoxRow center">
                  <div className="flexBoxRow center">
                    <div>Classes Completed</div>
                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-flex",
                        marginLeft: "10px",
                      }}
                    >
                      <CircularProgressWithLabel value={classes.length} />
                    </Box>
                  </div>
                  {/* <Box sx={{ width: "40%" }}>
                    <BorderLinearProgress
                      variant="determinate"
                      value={classes.length * 10}
                    />
                  </Box>
                  <div>{classes.length}/10 </div> */}
                  <div className="classBadgeList">
                    {classes.map((ele) => {
                      return (
                        <ClassBadge
                          variant="determinate"
                          key={ele}
                          course={ele}
                        />
                      );
                    })}
                  </div>
                </section>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        {/* Right */}
        <Grid item xs={5}>
          <Grid className="userGridsCol" container spacing={3}>
            <Grid className="card" item>
              <Item>
                <section className="flexBoxRow center">
                  <svg
                    className={open ? "status open" : "status close"}
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" />
                  </svg>
                  {open
                    ? "Open to Collaborate on Projects"
                    : "Don't open to Collaborate on Projects"}
                </section>
              </Item>
            </Grid>
            <InfoSection
              title="Programming Languages"
              collection={programming}
            />
            <InfoSection title="Industries" collection={industry} />
            <InfoSection title="Hobbies and Activities" collection={hobby} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
