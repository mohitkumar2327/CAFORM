import React from "react";
import Clientlogin from './screans/clientlogin.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
import ClientNewUserLogin from './screans/clientNewUserLogin.jsx'
import './css/screen1.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/clientlogin" element={<Clientlogin />} />
        <Route path="/clientverfication" element={<Clientverification />} />
        <Route path="/landingpg" element={<Landingpg />} />
        <Route path="/queryresolver" element={<Queryresolver />} />
        <Route path="/documentreview" element={<Documentreview />} />
        <Route path="/headermain" element={<Headermain />} />
        <Route path="/clientquestionnaire" element={<Clientquestionnaire />} />
        <Route path="/clientqueries" element={<Clientqueries />} />
        <Route path="/headquerie" element={<Headquerie />} />
        <Route path="/documentsign" element={<Documentsign />} />
        <Route path="/headdocsign" element={<Headdocsign />} />
        <Route path="/clientNewUserLogin" element={<ClientNewUserLogin />} />
        <Route path="/" element={<Navigate to="/clientlogin" replace />} />
      </Routes>
    </Router>
  );
}
export default App;