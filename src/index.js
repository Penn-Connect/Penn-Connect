import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import User from "./components/User.jsx";
import Connect from "./components/Connect.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Login from "./components/Login.jsx";
import SignUp from "./components/SignUpForm";
import Home from "./components/Home";
import Profile from "./components/Profile"
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

//Creating Custom Theme
const theme = createTheme({
  //Defining primary and secondary Color
  palette: {
    primary: {
      main: "#011f5b",
      light: "#3c4689",
      dark: "#000031",
    },
    secondary: {
      main: "#990303",
      light: "#d1442d",
      dark: "#650000",
    },
  },

  //Defining font properties (following rule of third)
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),

    h1: {
      fontSize: 49,
      margin: 0,
    },

    h2: {
      fontSize: 39,
      margin: 0,
    },

    h3: {
      fontSize: 31,
      margin: 0,
    },

    h4: {
      fontSize: 25,
      margin: 0,
    },

    h5: {
      fontSize: 20,
      margin: 0,
    },

    body1: {
      fontsize: 16,
      margin: 0,
    },

    body2: {
      fontSize: 14,
      margin: 0,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 481,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
          
            {/* Use Private Route to check if authenticated */}
            <Route exact element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
