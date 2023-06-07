import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import LoginPage from './components/Login';
import SignUpForm from './components/Signup';
import './App.css';
import Home from './components/Home';
import Assessments from './components/Assessments';
import TherapyModules from './components/TherapyModules';
import Resources from './components/Resources';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }  
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
      <div>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
    {/* <div>
      <h1>Login</h1>
      <Login />
    </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/therapy-modules" element={<TherapyModules />} />
        <Route path="/resources" element={<Resources />} />
        {/* <Route exact path="/Login" component={LoginPage} /> */}
        {/* <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
