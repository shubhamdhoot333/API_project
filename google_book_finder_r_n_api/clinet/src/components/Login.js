import React,{ useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
const Login =() =>{
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
       const loginUser = async (e) =>{
            e.preventDefault();
            const res  = await fetch("/Login",{
                        method:"POST",
                        headers:{
                                 "Content-Type":"application/json"
                                 },
                         body:JSON.stringify({
                                email , password
                                })
                        });

          const data = res.json();
         if(res.status === 400 || !data)
          {
            window.alert("Invalied Login");
          }
          else{
            window.alert("Login successfully");
            console.log("login successful");
            history.push("/");  
          }
        }


  return(
    <>
       <section className="signin">
        <div className ="container mt-5">
          <div className="signin-content">
            <div className="card text-center">
               <div className="card-header">
                 <h5>  Login Here </h5>
                </div>
                <div className="card-body">
                
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.freepik.com/free-vector/e-book-in-computer-illustration_33099-703.jpg" 
      className="img-fluid rounded-start" alt="..." />
      <NavLink to="/Register" >I have no Account</NavLink>     
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <form method="POST"className ="Login-form" id="Login-form"> 
                        <br /><br />
                        <div className="row">
                              <div className="col-2"></div>
                              <div className="col-md-8">
                                     <label  className="form-label text-primary">Email*</label>
                                      <input type="email" 
                                      className="form-control"
                                       name="email"
                                       onChange={ (e) => setEmail( e.target.value ) }
                                       placeholder="Enter your email here" />
                               </div>
                               <div className="col-2"></div> 
                         </div> 
                         <div className="row">
                               <div className="col-2"></div> 
                               <div className="col-md-8">
                               <label className="text-primary">Password  *</label>
                                 <input type="password" 
                                 className="form-control" 
                                 name="password"
                                 onChange={ (e) => setPassword( e.target.value ) }
                                  placeholder="Enter your password here" />
                                </div>
                                <div className="col-2"></div> 
                      </div>
                     <br />
                                     <div className="row">
                                  <div className="col-2"></div>
                                  <div className="col-md-8">
                                          <button type="submit" 
                                          name="submit" 
                                          onClick={ loginUser }
                                          className="btn btn-primary">Login Here </button>
                                  </div>
                                 <div className="col-2"></div>
                           </div>
                              </form>     
                              <br /><br />
                              <p>You can login with</p> <h4><i className="fab fa-facebook"></i></h4>               
                  <br /><br />              

      </div>
    </div>
</div>

                                    
                 </div>
                             </div>
          </div>
        </div>
          

    </section>
    
    </>
  )
  
}
export default Login;