import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./styles.css";
import Switch from "./components/Switch";
import Content from "./components/Content";
import Audio from "./components/Audio";
import CareerSuccess from './components/CareerSuccess';
import Entrepreneurship from './components/Entrepreneurship';
import PersonalDevelopment from './components/PersonalDevelopment';
import RemoteWork from './components/RemoteWork';
import Episodes from './components/Episodes';
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div>
      <Switch rounded={true} />
      <Content />
    </div>
  );
}

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/careersuccess" element={<CareerSuccess />} />
            <Route path="/personalDevelopment" element={<PersonalDevelopment />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/remoteWork" element={<RemoteWork />} />
            <Route path="/episodes/:index" element={<Episodes />} />          
          </Routes>
        </div>
        
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;






