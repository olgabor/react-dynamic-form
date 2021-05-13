import React, { useState, Fragment } from "react";
import { data } from "./data";

const App = () => {
 
  // const [inputFields, setInputFields] = useState(data); 
  const [inputFiled, setValue] = useState({first_name: '',
                                           last_name:'',
                                           email:'',
                                           phone_number:'', 
                                           job_title:'',
                                           date_of_birth: '', 
                                           parental_consent: false
                                           })
  // const [inputFiled, setValue] = useState(... data , data.name = '' parental_consent:'')
  const [checkbox , setCheckbox ] = useState(false)
  
  const  handleParentalConsent = (value) => {
    const now = new Date();
    return value >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate());
  }
                            
  
  const handleSubmit = event => { 
    event.preventDefault()
    console.log(inputFiled);
  }

  const handleInputChange = (index, event) => {
      (event.target.name === "date_of_birth" && handleParentalConsent(new Date(event.target.value)) ?  setCheckbox(true) : setCheckbox(false))
      setValue({...inputFiled, [event.target.name]: event.target.value.trim()})
    }

  return(
  <> 
    <h1> Dynamic Form </h1>
    <form onSubmit={handleSubmit}>
      <div className="">
        {data.filter( inputField => inputField.name !== "parental_consent").map((inputField, index) => (
        <Fragment key={index}>
        <div className="">
                <label>{inputField.human_label }</label>
                <input
                  onChange={event => handleInputChange(index, event)}
                  type={inputField.type}
                  className="form-control"
                  id={inputField.name}
                  name={inputField.name}
                />
              </div>
            </Fragment>
          ))} 
          { checkbox ?  
          <Fragment >
        <div className="">
                <label> Parental consent</label>
                <input
                  type="checkbox"
                  className="form-control"
                  name="parental_consent"
                />
              </div>
            </Fragment>: null }
          <div className="">
          <input type="submit" name="" id="submit"/> 
          </div>
       </div>
       <br/>
    </form>
    </> 
  )
}

export default App;
