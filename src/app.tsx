import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import router components
import Login from "./Components/login"; // Import Login component
import Navbar from "./Components/navbar"; // Import Navbar component
import "./app.css"; // Import styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Define separate routes for each page */}
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
