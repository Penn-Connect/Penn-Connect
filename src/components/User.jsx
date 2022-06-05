import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import "../assets/css/User.css";

import ContactInfo from "./user-components/ContactInfo.jsx";
import AboutMe from "./user-components/AboutMe.jsx";
import ClassCompletion from "./user-components/ClassCompletion.jsx";

import InfoSection from "./user-components/InfoSection.jsx";

import Header from "./global-components/Header";
import Data from "../assets/json/dummyUser.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
    <div id="userPage">
      <Header id="header" name={name} />

      <Box id="userContainer" sx={{ flexGrow: 1 }}>
        <Grid className="userGridsRow" container spacing={3}>
          {/* Left */}
          <Grid className="userGrid" item xs={7}>
            <Grid className="userGridsCol" container spacing={3}>
              <ContactInfo name={name} location={location} social={social} />
              <AboutMe about={about} />
              <ClassCompletion classes={classes} useCircular={true} />
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
