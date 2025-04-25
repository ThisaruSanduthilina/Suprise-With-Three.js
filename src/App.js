import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Surprise from './pages/suprise.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </Router>
  );
};

export default App;