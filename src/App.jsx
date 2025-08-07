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
import ClientNewUserLogin from './screans/clientNewUserLogin.jsx'
import './css/screen1.css'
// import Clientquestionnaire2 from "./screans/clientquestionnaire2.jsx";
// import Clientquestionnaire3 from "./screans/clientquestionnaire3.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Clientquestionnaire3 />} /> */}
        <Route path="/" element={<Clientlogin />} />
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
      </Routes>
    </Router>
  );
}
export default App;