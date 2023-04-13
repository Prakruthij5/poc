import React, { useState} from 'react'
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
const Register = () =>{
  let navigate=useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
  
    // Validate first name
    if (!state.firstname.trim()) {
      errors.firstname = "First name is required";
    }
  
    // Validate last name
    if (!state.lastname.trim()) {
      errors.lastname = "Last name is required";
    }
  
    // Validate email
    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Email is invalid";
    }
  
    // Validate password
    if (!state.password.trim()) {
      errors.password = "Password is required";
    } else if (state.password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    return errors;
  };
  

  const handleRegister = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      await axios.get("https://6409bc8e6ecd4f9e18b9913a.mockapi.io/Tickceting", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        if (response.status === 200) {
          navigate("../dashboard");
          console.log(response.data);
          dispatch({ type: "DATA", payload: response.data });
        }
      });
    }
  };
  

      const handleChange = (e) => { 
        setState((prevState) => ({
         ...prevState,
          [e.target.name]: e.target.value,
         }));
     };

      const [state, setState] = useState({
        firstname: "",
        lastname : "",
        email: "",
        password: "",
        successMessage: null,
      });  

      console.log("state",state);
    return (
      <div className='register'>
      <form>
        <div className='registerheader'><h3>Sign Up</h3></div>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
            placeholder="First name" required
            onChange={handleChange}
            value = {state.firstname}
            name = "firstname"
          />
          {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
           placeholder="Last name" required 
          onChange={handleChange}
          value = {state.lastname}
          name = "lastname"/>
          {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Enter email" required
            onChange={handleChange}
            value = {state.email}
            name = "email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Enter password" required
            onChange={handleChange}
            value = {state.password}
            name = "password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleRegister} 
          disabled={(!state.firstname|| !state.lastname || !state.email || !state.password)}>
            Sign Up
          </button>
        </div>
        <div className="account">
          Already Registered <a href="/">Sign In?</a>
        </div>
        
      </form>
      </div>
    )
  }

export default Register;