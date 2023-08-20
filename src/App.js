import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./styles.css";
import Switch from "./components/Switch";
import Content from "./components/Content";
import Audio from "./components/Audio";
import CareerSuccess from './components/CareerSuccess';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/careersuccess" element={<CareerSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






// function App() {
//   return(
//     <><div className="App">
//       <Navbar></Navbar>
//       <Switch rounded={true}/>
//       <Content></Content>
//       <Audio></Audio>
//     </div>
   
//       </>
//   )
// }

// export default App;

