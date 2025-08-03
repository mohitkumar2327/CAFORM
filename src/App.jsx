import React from "react";
import Clientlogin from './screans/clientlogin.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clientverification from './screans/clientverification.jsx';
import Header from "./components/header.jsx";
import Landingpg from './screans/clientlandingpage.jsx';
import Queryresolver from './screans/queryresolver.jsx';  
import Documentreview from './screans/documentreview.jsx';
import Headermain from "./components/mainhead.jsx";
import Clientquestionnaire from "./screans/clientquestionnaire.jsx";
import Clientqueries from './screans/clientqueries.jsx'
import Headquerie from './components/headerqueries.jsx'
import Documentsign from './screans/clientdocumentsign.jsx'
import Headdocsign from './components/headdocsign.jsx'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Clientlogin />} /> */}
        {/* <Route path="/" element={<Clientverification />} /> */}
        {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/" element={<Landingpg />} /> */}
        {/* <Route path="/" element={<Queryresolver />} /> */}
        {/* <Route path="/" element={<Documentreview />} /> */}
        <Route path="/" element={<Headermain />} />
        {/* <Route path="/" element={<Clientquestionnaire />} /> */}
        {/* <Route path="/" element={<Clientqueries />} /> */}
        {/* <Route path="/" element={<Headquerie />} /> */}
        {/* <Route path="/" element={<Documentsign />} /> */}
        {/* <Route path="/" element={<Headdocsign />} /> */}
      </Routes>
    </Router>
  );
}
export default App;