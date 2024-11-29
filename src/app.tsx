import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import router components

import Navbar from "./Components/navbar"; // Import Navbar component
import HomePageContent from "./Components/homePageContent"; // Importing home page content componenent

import "./app.css"; // Import styles

function App() {
  return (
    <>
      <Navbar />
      <div className="homePageContent">
        <HomePageContent />
      </div>
    </>
  );
}

export default App;
