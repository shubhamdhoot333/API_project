import React from "react";
import { NavLink } from "react-router-dom";
const Error =() =>{
  return(
    <>
    
    <div className="content">
        <center>
            <p>404 we are sorry page not found  </p>
            <NavLink to="/"> Back To HomePage</NavLink>
        </center>
    
    </div>

    </>
  )
  
}
export default Error;