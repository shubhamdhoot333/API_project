import React , { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
const Register =() =>{
    const history =useHistory();
    const [user,setUser] = useState({
        name:"" ,
        email:"" ,
        phone: "",
        work:"" ,
        password: "" ,
        cpassword:""
    });

    let name ,value;
    const handleInputs =(e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value });
      }
    const PostData = async (e) =>{
        e.preventDefault();
            const {  name , email ,phone, work , password, cpassword} = user;

          const res  = await fetch("/register",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
                 },
          body:JSON.stringify({
               name , email ,phone, work , password, cpassword
            })
          });
          const data =await res.json();
          if(data.status ===422 || !data)
          {
            window.alert("Invalied Registration");
          }
          else{
            window.alert("Register successfully");
            history.push("/Login");
          }
        };
        


  return(
    <>
    <section className="signup">
        <div className ="container mt-5">
          <div className="signup-content">
            <div className="card text-center">
               <div className="card-header">
                 <h5>  Register Here </h5>
                </div>
                <div className="card-body">
                     <form  method="POST" className ="register-form" id="register-form"> 
                        <div className="row">
                           <div className="col-2"></div>
                           <div className="col-md-4">
                           <label className="text-primary">Name*</label>
                         <input type="text" 
                         className="form-control" 
                         name="name"
                          onChange={ handleInputs}
                           placeholder="Enter your name here" />
                    </div>

                    <div className="col-md-4">
                          <label className="text-primary">Phone*</label>
                          <input type="text" 
                          className="form-control" 
                          name="phone" 
                           onChange={ handleInputs}
                            placeholder="Enter your phone here" />
                    </div>
                    <div className="col-2"></div>
                </div>
      <br />
               <div className="row">
                     <div className="col-2"></div>
                      <div className="col-md-4">
                            <label  className="form-label text-primary">Email*</label>
                             <input type="email"
                              className="form-control" 
                              name="email" 
                               onChange={ handleInputs} 
                               placeholder="Enter your email here" />
                      </div>

                      <div className="col-md-4">
                             <label  className="form-label text-primary">Profession*</label>
                             <input type="text" 
                             className="form-control" 
                             name="work" 
                             onChange={ handleInputs}
                              placeholder="Enter your profession here" />
                      </div>
                        <div className="col-2"></div>
             </div>
            <br />
            <div className="row">
                 <div className="col-2"></div>
                 <div className="col-md-4">
                        <label className="text-primary">Password  *</label>
                        <input type="password" 
                        className="form-control" 
                        name="password" 
                        onChange={ handleInputs}
                         placeholder="Enter your password here" />
                 </div>
                 <div className="col-md-4">
                        <label className="text-primary">Confirm Password  *</label>
                        <input type="password" 
                        className="form-control" 
                        name="cpassword"
                         onChange={ handleInputs} 
                         placeholder="Enter your confirm password here" />
                 </div>
                 <div className="col-2"></div>
             </div>

              
                <br />
                  <div className="row">
                         <div className="col-2"></div>
                         <div className="col-md-8">
                                 <button type="submit" 
                                 name="submit"
                                  className="btn btn-primary" 
                                  onClick={PostData} >Register Your Details</button>
                         </div>
                        <div className="col-2"></div>
                  </div>
                     </form>                     
                 </div>
                  <NavLink to="/Login" >I am already register</NavLink>               
                  <br /><br />
              </div>
          </div>
        </div>
          

    </section>
    
    </>
  )
  
}
export default Register;