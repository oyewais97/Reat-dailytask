import React, {state, useState, setState} from 'react';
import Navbar from './navbar';
import { withRouter } from 'react-router-dom';
import './form.css';


const FormUser =()=>{
     
    const[firstname, setFirstname]= useState("")
    const[firstnameone, setFirstnameone] = useState()

    const[lastname, setLastname] = useState("")
    const[lastnameone, setLastnameone]= useState()

    const[show, setShow] = useState(false)
    
        
    const handleSubmit = (e) =>{
             e.preventDefault()
             setFirstnameone(firstname);
             setLastnameone(lastname);
             setShow({show :!show})
         }
      const  handleInputChange = e =>{
             
             
             console.log(e.target.value)
             setFirstname(e.target.value)
            

      }
      const handleInputChangetwo = e =>{
        e.preventDefault(); 
        setLastname(e.target.value)
      }
     const x = show;
     const Results = () => {

        return(
        <>
        <p>firstName is : {firstnameone}</p>
        <p>lastname is :{lastnameone}</p>
        </>
        );
    }
    
    return(
        <>
        <Navbar />
        <div class="card3 col-sm-12 col-lg-6 mx-auto">
                    <div class="card-body form-card">
                        <div className="form-content">
                       
                          <form className="form" onSubmit={handleSubmit}>
                          
                            <h1 className="form-heading col-6 mx-auto">User Form</h1> 
                               <div class="col-md-6 mb-3">
                                  <label for="validationCustom01">First name</label>
                                      <input type="text" class="form-control" id="validationCustom01" placeholder="First name"
                     
                                       value={firstname}
                                        onChange={handleInputChange}

                                        />
                                </div>
                           <div class="col-md-6 mb-3">
                                <label for="validationCustom01">Last name</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Last name"
                                 value={lastname}
                                 onChange={handleInputChangetwo}
                                />
                          </div>

                       <div class="form-group col-md-6">
                                     <label for="inputEmail4">Email</label>
                                     <input type="email" class="form-control" id="inputEmail4" placeholder="Email"
      
      
                                             />
                        </div>
                 <div>
                     <button type="submit" class="btn btn-success col-2 mx-auto"
                       onClick={handleSubmit}
    
                     >Submit </button>
                     
                
                     
    </div>
                      
        </form>

            </div>
                       

                </div>
                     
        </div>
        <div className="show-value col-6 mx-auto"><p
        className="first-show-para col-8 mx-auto">{x? <Results/> : ''}</p></div>
    </>
    );
   
}

export default FormUser ;