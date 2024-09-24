import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import router components
import Login from "./Components/login"; // Import Login component
import Navbar from "./Components/navbar"; // Import Navbar component
import "./app.css"; // Import styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Define separate routes for each page  Routing process for which page would be the landing page */}
        <Route path="/" element={<Navigate to="/navbar" />} />
        {/* The line (ln 17) above allows the webpage to go a specific landing page, for the DEV stage's it would be navbar */}

        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
