import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import ExercieseList from "./components/exercises-list.component";
import CreateExerciese from "./components/create-exercise.component.js";



function App() {
  return (
    <Router>
      <div className = "container"> 
        <Route path = "/" exact component = {ExercieseList}/>
        <Route path = "/create" exact component = {CreateExerciese}/>
      </div>  
    </Router>

     
  );
}

export default App;
