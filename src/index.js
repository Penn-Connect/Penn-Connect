import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Header from "./Header";
import User from "./User";
import Data from "./assets/json/dummyUser.json";
import Login from "./Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

root.render(

  <section id ="loginPage">
    <Login/>
  </section>

  // <section id="userPage">
  //   <Header name={name} />
  //   <User
  //     name={name}
  //     location={location}
  //     social={social}
  //     about={about}
  //     classes={classes}
  //     open={open}
  //     programming={programming}
  //     industry={industry}
  //     hobby={hobby}
  //   />
  // </section>
);
