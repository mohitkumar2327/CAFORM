import React from "react";
import Clientlogin from './screans/clientlogin.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clientverification from './screans/clientverification.jsx';
import Header from "./components/header.jsx";
import Landingpg from '../src/screans/clientlandingpage.jsx'; // Corrected path to be relative from App.jsx if it's in the 'src' folder

function App() {
  return (
    <Router>
      <Routes>
        {/* Uncomment the route you want to be active by removing the {/* and */}
        {/* <Route path="/" element={<Clientlogin />} /> */}
        {/* This was the problematic line - ensuring it's commented out correctly */}
        {/* <Route path="/" element={<Clientverification />} /> */}
        {/* <Route path="/" element={<Header />} /> */}
        {/* Make sure the Landingpg route is correctly formatted */}
        <Route path="/" element={<Landingpg />} />
      </Routes>
    </Router>
  );
}

export default App;