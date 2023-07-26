import Navbar from "./components/Navbar";
import "./styles.css";
import Switch from "./components/Switch";
import Content from "./components/Content";

function App() {
  return(
    <><div className="App">
      <Navbar></Navbar>
      <Switch rounded={true}/>
      <Content></Content>
    </div>
   
      </>
  )
}

export default App;
