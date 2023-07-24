import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Articles from './components/Articles';
import Interviews from './components/Interviews';
import Resources from './components/Resources';
import Loggingin from './components/loggingin';
import CommunityForum from './components/CommunityForum';
import Questions from './components/auth/questionPage';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import Article4 from './components/Article4';
import Article5 from './components/Article5';
import Article6 from './components/Article6';


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
            <Link to="/community-forum">Community Forum</Link>
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
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/loggingin/*" element={<Loggingin />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/articles/article1" element={<Article1/>} />
        <Route path="/articles/article2" element={<Article2/>} />
        <Route path="/articles/article3" element={<Article3/>} />
        <Route path="/articles/article4" element={<Article4/>} />
        <Route path="/articles/article5" element={<Article5/>} />
        <Route path="/articles/article6" element={<Article6/>} />
      </Routes>
    </Router>
  );
}

export default App;