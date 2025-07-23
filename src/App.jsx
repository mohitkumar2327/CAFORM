import React from "react";
import Clientlogin from './screans/clientlogin.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clientverification from './screans/clientverification.jsx';
import Header from "./components/header.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Clientlogin />} /> */}
        {/* <Route path="/" element={<Clientverification />} /> */}
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;