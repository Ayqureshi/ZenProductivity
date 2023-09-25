import React, {useState} from "react";
import { doc, setDoc } from "firebase/firestore"; 
import {firestore} from "../../firebase";
import "./questionPage.css"

const questionPage = () => {
  const [age, setAge] = useState(null);
  const [job, setJob] = useState(null);
  const [prod, setProd] = useState(null);
  const [focus, setFocus] = useState(null);
  const [hobby, setHobby] = useState(null);


  async function setUserDetails() {
    const payload = {
      age: age,
      job: job,
      prod: prod,
      focus: focus,
      hobby: hobby,
    }
    await setDoc(doc(firestore, "data", "user"), payload);
  }

  const handleAgeChange = (event) => {
    return(
      setAge(event.target.value)
    )
  }
  const handleJobChange = (event) => {
    return(
      setJob(event.target.value)
    )
  }
  const handleProdChange = (event) => {
    return(
      setProd(event.target.value)
    )
  }
  const handleFocusChange = (event) => {
    return(
      setFocus(event.target.value)
    )
  }
  const handleHobbyChange = (event) => {
    return(
      setHobby(event.target.value)
    )
  }

  return(
    <div>
      <h1>
        Please answer the following questions!
      </h1>
      <div className="questionContainer">
        <span>
          1) What is your age?
        </span>
        <form>
          <input onChange={handleAgeChange}/>
        </form>
      </div>
      <div className="questionContainer">
        <span>
          2) What is your occupation?
        </span>
        <form>
          <input onChange={handleJobChange}/>
        </form>
      </div>
      <div className="questionContainer">
        <span>
          3) Briefly describe your productivity system.
        </span>
        <form>
          <input onChange={handleProdChange}/>
        </form>
      </div>
      <div className="questionContainer">
        <span>
          4) Briefly describe where you focus best at.
        </span>
        <form>
          <input onChange={handleFocusChange}/>
        </form>
      </div>
      <div className="questionContainer">
        <span>
          5) List any hobbies.
        </span>
        <form>
          <input onChange={handleHobbyChange}/>
        </form>
      </div>
      <div>
        <button onClick={setUserDetails}>
          Submit
        </button>
      </div>      
    </div>
  )
}

export default questionPage;