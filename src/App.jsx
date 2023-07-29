import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Articles from './components/Articles';
import Interviews from './components/Interviews';
import Resources from './components/Resources';
import Loggingin from './components/loggingin';
import Community from './components/Community';
import Questions from './components/auth/questionPage';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return ( 
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/interviews">Audio Interviews</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li className="right-link">
            <Link to="/loggingin">Signup/Login</Link>
          </li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/community" element={<Community />} />
        <Route path="/loggingin" element={<Loggingin />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
