import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar"; // Navbar stays persistent
// import Contact from "./Components/contact"; // Contact page
import Login from "./Components/login"; // Import Login component
import HomePageContent from "./Components/homePageContent"; // Homepage content

function App() {
  return (
    <Router>
      {/* Navbar always displayed */}
      <Navbar />

      {/* Routes to handle navigation */}
      <Routes>
        <Route path="/" element={<HomePageContent />} />{" "}
        {/* Default Home Page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
