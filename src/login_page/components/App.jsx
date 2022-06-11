import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./login_page/components/Login";
import Header from "./Header";
import Footer from "./Footer";

function BasicApp() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
        <Route exact path="/login" component={LoginComponent} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}


export default BasicApp;