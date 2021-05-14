import React, { useState, Fragment } from "react";
import { data } from "./data";
import "./index.css";

const App = () => {
  const [inputFields, setInputFields] = useState(data);
  const [inputField, setValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    job_title: "",
    date_of_birth: "",
  });
  const [checkbox, setCheckbox] = useState(false);

  const handleParentalConsent = (value) => {
    { 
      // Takes date submitted by form and returns Bool 
    } 
    const now = new Date();
    return (
      value >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate())
    );
  };

  const handleSubmit = (event) => {
    { 
      // Returns an object containing the data form & resets the form on submission 
    } 
    event.preventDefault();
    console.log(inputField);
    event.target.reset();
  };

  const handleInputChange = (index, event) => {
    { 
      // Updates setCheckbox  & setValue states from data fields  
    } 
    event.target.name === "date_of_birth" &&
    handleParentalConsent(new Date(event.target.value))
      ? setCheckbox(true)
      : setCheckbox(false);
    setValue({ ...inputField, [event.target.name]: event.target.value.trim() });
  };

  return (
    <>
      <div className="form-container">
        <form className="form" id="form" onSubmit={handleSubmit}>
          <h1> Dynamic Form </h1>
          <div>
            {inputFields
              .filter((inputField) => inputField.name !== "parental_consent")
              .map((inputField, index) => (
                <Fragment key={index}>
                  <div>
                    <label className="form-label">
                      {inputField.human_label}
                    </label>
                    <input
                      onChange={(event) => handleInputChange(index, event)}
                      type={inputField.type}
                      className="form-control"
                      id={inputField.name}
                      name={inputField.name}
                      required
                    />
                  </div>
                </Fragment>
              ))}
              { 
                // Sets parental consent checkbox based on checkbox state value 
              } 
            {checkbox ? (
              <Fragment>
                <div>
                  <label className="form-label"> Parental consent</label>
                  <input
                    type="checkbox"
                    name="parental_consent"
                    className="form-control"
                    className="checkbox"
                    value={checkbox}
                  />
                </div>
              </Fragment>
            ) : null}
            <div>
              <input
                className="form-input-btn"
                type="submit"
                name=""
                id="submit"
              />
            </div>
          </div>
          <br />
        </form>
      </div>
    </>
  );
};

export default App;
