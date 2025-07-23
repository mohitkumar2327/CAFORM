import React from "react";
import Clientlogin from './screans/clientlogin.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clientverification from './screans/clientverification.jsx';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Clientverification />} /> */}
        <Route path="/" element={<Clientlogin />} />
      </Routes>
    </Router>
  );
}

export default App;