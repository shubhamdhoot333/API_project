import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import { Route,Switch } from "react-router-dom";
const App =() =>{
  return(
    <>
    <div>
    <Navbar />
    <Switch>
    <Route exact path="/" >
      <Home />
    </Route>

    <Route path="/About" >
      <About />
    </Route>
    
	<Route path="/Contact" >
      <Contact />
    </Route>
    
	<Route path="/Login" >
      <Login />
    </Route>
    
	<Route path ="/Register">
      <Register />
    </Route>

    <Route >
     <Error />
    </Route>
    
	</Switch>
    
	</div>
    </>
  )
  
}
export default App;