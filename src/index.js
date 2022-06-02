import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import Header from "./components/global-components/Header";
import User from "./components/User.jsx";

import Login from "./components/Login.jsx";




export default function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={ <Login /> } />
              <Route path="/user" element={ <User /> } />
            </Route>
          </Routes>
      </BrowserRouter>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
