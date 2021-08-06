import React,{ useEffect,useState } from 'react';

const useEffectAPI = () => {
   const [users,setUsers ] =useState([]);
    const getUsers =  async () =>{
                try{
                      //yaha par wait karme jab tak apn ko response nahi milta 
            const response = await fetch('https://api.github.com/users');
            // response ko json se data ke ander convert karege 
                   setUsers(await response.json());

                }catch(err)
                {
                    console.log(err);
                }
      
      
    }
   
    useEffect(() =>{ 
          getUsers();  
    },[])

   
   
   
    return (
        <>
        <center>  <h2 className="mt-4"> List Of GitHub User </h2>  </center>
            <div className="container">
                    <div className="row">    
                        {
                            users.map((curElem) => { 
                                    return(
                                        <div>
                                            <div className="card p-2 ml-2 mb-4">
                                                <div className="d-flex align-item-center">
                                                    <div ClassName="image">
                                                        <img src={curElem.avatar_url} className="" width="155" alt="images of user" />
                                                    </div>
                                                    <div className="ml-2 w-100">
                                                    <center><h4 className="mb-0 mt-0 ">{ curElem.login }</h4>
                                                         <br />  Top- User</center>
                                        
                                                    <br />
                                            <div className="p-2 mt-2 bg-danger d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                        <a href = { curElem.html_url }>click here to go account </a> 
                                                </div>
                                                 
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                        </div>                         
                                       
                               )
                            })
                        }

                       
                        
                    </div>
            </div>
         </>
    )
}

export default useEffectAPI;
