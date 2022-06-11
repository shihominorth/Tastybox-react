import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing_page/components/Landing_Page";
import LoginComponent from "./login_page/components/Login";
import Header from "./Header";
import Footer from "./Footer";

// const loginBtnClicked = { "location.href= ${LoginPagePath}" };

function App() {
  return <LandingPage />;
}

function Basic() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/login" component={LoginComponent} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function Login() {
  return <LoginComponent />;
}

export default App;
