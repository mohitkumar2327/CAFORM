import React from "react";
import Clientlogin from './screans/clientlogin.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clientverification from './screans/clientverification.jsx';
import Header from "./components/header.jsx";
import Landingpg from '../src/screans/clientlandingpage.jsx';
import Queryresolver from '../src/screans/queryresolver.jsx'
import Documentreview from "./screans/documentreview.jsx";

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
        {/* <Route path="/" element={<Landingpg />} /> */}
        {/* <Route path="/" element={<Queryresolver />} /> */}
        <Route path="/" element={<Documentreview />} />

      </Routes>
    </Router>
  );
}

export default App;