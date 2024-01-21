import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./styles.css";
// import Switch from "./components/Switch";
import Content from "./components/Content";
import Audio from "./components/Audio";
import CareerSuccess from './components/CareerSuccess';
import Entrepreneurship from './components/Entrepreneurship';
import EntrepreneurshipEpisodes from "./components/EntrepreneurshipEpisodes";
import PersonalDevelopment from './components/PersonalDevelopment';
import PersonalDevelopmentEpisodes from "./components/PersonalDevelopmentEpisodes";
import ContactUs from './components/ContactUs';
import SupportRequest from './components/SupportRequest';
import RemoteWork from './components/RemoteWork';
import RemoteWorkEpisodes from "./components/RemoteWorkEpisodes";
import Episodes from './components/Episodes';
import Footer from "./components/Footer";
// import Community from "./components/Community";
import AddPostPage from './components/community/AddCommunityPost';
import Articles from './components/Articles';
// import Loggingin from './components/loggingin';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import Article4 from './components/Article4';
import Article5 from './components/Article5';
import Article6 from './components/Article6';
import OurMission from "./components/OurMission";
import OurTeam from "./components/OurTeam";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Privacy from "./components/Privacy";




function HomePage() {
  return (
    <div>
      {/* <Switch rounded={true} /> */}
      <Content/>
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
            <Route path ="/article1" element={<Article1 />} />
            <Route path ="/article2" element={<Article2 />} />
            <Route path ="/article3" element={<Article3 />} />
            <Route path ="/article4" element={<Article4 />} />
            <Route path ="/article5" element={<Article5 />} />
            <Route path ="/article6" element={<Article6 />} />
            <Route path="/ourmission" element={<OurMission />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            {/* <Route path="/community" element={<Community />} /> */}
            <Route path="/community/addPost" element={<AddPostPage />} />
            <Route path="/articles" element={<Articles />} />
            {/* <Route path="/loggingin" element={<Loggingin />} /> */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/careersuccess" element={<CareerSuccess />} />
            <Route path="/personalDevelopment" element={<PersonalDevelopment />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/support-request" element={<SupportRequest />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/remoteWork" element={<RemoteWork />} />
            <Route path="/episodes/:episodeNumber" element={<Episodes />} />
            <Route path="/personalDevelopmentEpisode/:episodeNumber" element={<PersonalDevelopmentEpisodes />} />
            <Route path="/EntrepreneurshipEpisode/:episodeNumber" element={<EntrepreneurshipEpisodes />} />
            <Route path="/RemoteWorkEpisode/:episodeNumber" element={<RemoteWorkEpisodes />} />
            {/* <Route path="/loggingin" element={<Loggingin />} />         */}
          </Routes>
        </div>
        
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;