import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing_page/components/Landing_Page";

// const loginBtnClicked = { "location.href= ${LoginPagePath}" };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
