import React, { useState, Fragment } from "react";
import { data } from "./data";

const App = () => {
 
  const [inputFields, setInputFields] = useState(data); 
  const [inputFiled, setValue] = useState({first_name: '',
                                           last_name:'',
                                           email:'',
                                           phone_number:'', 
                                           job_title:'',
                                           date_of_birth:'',
                                           parental_consent:''})

  const handleSubmit = event => { 
    event.preventDefault()
    console.log(inputFiled);
  }

  const handleInputChange = (index, event) => {
      setValue({...inputFiled, [event.target.name]: event.target.value.trim()})
    }

  return(
  <> 
    <h1> Dynamic Form </h1>
    <form onSubmit={handleSubmit}>
      <div className="">
      {inputFields.map((inputField, index) => (
        <Fragment key={index}>
        <div className="">
                <label>{inputField.human_label}</label>
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
