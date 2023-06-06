import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Assessments from './components/Assessments';
import TherapyModules from './components/TherapyModules';
import Resources from './components/Resources';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/assessments">Assessments</Link>
          </li>
          <li>
            <Link to="/therapy-modules">Therapy Modules</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/therapy-modules" element={<TherapyModules />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
