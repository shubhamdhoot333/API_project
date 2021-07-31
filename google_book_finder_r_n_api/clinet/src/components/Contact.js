import React, { useState } from "react"; 
import axios from 'axios';  
function Contact() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    const [apiKey, setApiKey] = useState("AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88")  
    const [link ,setLink] =useState('');
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);
                  
            })  
    }  
    return (  
      <>
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search">  
              
                <div className="row">  
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                         <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div class="col-md-4"></div>
                  </div>
                  <br /> 
                  <div className="row">  
                  <div class="col-md-4"></div>
                  <div class="col-md-4 text-center">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn btn-lg " />  
                    </div>  
                    <div class="col-md-4"></div>  
                </div>
              
            </div>  
          </form>  
            <div className="container">  
                <div className="row">  
                    {
                      result.map(book => (
                        
                        <div className="col-sm-2">  
                        <div className="card">
                        
                        <img src={ book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : '' } 
                        alt={book.title} 
                        height="100px"
                         width="100px" 
                           className="card-img-top"
                         />
                        <div class="card-body">
                               <h5 class="card-title">{ book.volumeInfo.title }</h5>
                                <p class="card-text">{ book.volumeInfo.auther }</p>
                                <a href={book.volumeInfo.previewLink }> click here </a>
                        </div>


                        </div>
                       
                        
                        
                        </div>
                    )
                    )
                    }                
                    
                </div>  
            </div>  
        </>
  
    )  
    
}  
  
export default Contact;  