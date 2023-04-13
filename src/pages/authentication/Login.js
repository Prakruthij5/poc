import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link , useNavigate} from 'react-router-dom'
import "./authentication.css"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  

  let navigate=useNavigate();
  const handleLogin= async(e)=> {
  e.preventDefault();
   // let dummyData= [{"name":"kiran","priority":"1","seat_number":"20","description":"test based ticket","id":"1","email":"kiran.more170498@gmail.com"},{"name":"jack","priority":"1","seat_number":"43","description":"Jack's ticket. AC","id":"2","email":"jack123@gmail.com"},{"name":"Layana","priority":"3","seat_number":"13","description":"Layana's Seat Non-AC","id":"3","email":"layana@gmail.com"},{"name":"Kavya","priority":"2","seat_number":"11","description":"Kavya's Ticket AC","id":"4","email":"kavya124@gmail.com"},{"name":"Sahana","priority":"1","seat_number":"12","description":"sahana's Ticket Non-AC","id":"5","email":"sahana45@gmail.com"},{"name":"Vijay","priority":"1","seat_number":"15","description":"Vijay's Ticket AC","id":"6","email":"vijayram1616@gmail.com"},{"name":"Abhi","priority":"3","seat_number":"17","description":"Abhi's Ticket Non-AC","id":"7","email":"abhiarya23@gmail.com"},{"name":"Anu","priority":"2","seat_number":"14","description":"Anu's Ticket Non-AC","id":"8","email":"anu567@gmail.com"},{"name":"Swathi","priority":"3","seat_number":"16","description":"Swathi's Ticket AC","id":"9","email":"swathi56@gmail.com"},{"name":"Rahul","priority":"1","seat_number":"18","description":"AC Ticket","id":"10","email":"rahulraj34@gmail.com"},{"name":"lakshya","priority":1,"seat_number":23,"description":"lakshya's ticket ACC","id":"11","email":"lakshya43@gmail.com"},{"name":"poornima","priority":2,"seat_number":33,"description":"Poornima's ticket is booked for the below mentioned date","id":"12","email":"poornimay6@gmail.com"},{"name":"kavan","priority":1,"seat_number":34,"description":"Kavan's ticket is booked and return ticket also confirmed","id":"13","email":"kavantg23@gmail.com"},{"name":"Neha","priority":2,"seat_number":36,"description":"Neha's ticket booked and confirmed","id":"14","email":"nehavj5@gmail.com"},{"name":"Veeksha","priority":3,"seat_number":46,"description":"Veeksha's ticket Non-AC","id":"15","email":"veekshyui7@gmail.com"},{"name":"Yuktha","priority":4,"seat_number":26,"description":"yuktha's Ticket for Managlore is confirmed","id":"16","email":"yuktha652@gmail.com"},{"name":"Naman","priority":3,"seat_number":27,"description":"Naman's Ticket confirmed","id":"17","email":"naman65@gmail.com"},{"name":"Ranya","priority":2,"seat_number":29,"description":"Ranya's ticket NON-AC Booked","id":"18","email":"ranyaraj4@gmail.com"},{"name":"sindhu","priority":1,"seat_number":24,"description":"Sindhu's Ticket Booked for bangalore","id":"19","email":"sirisindhu6@gmail.com"},{"name":"Deepak","priority":2,"seat_number":30,"description":"Deepak's seat confirmed","id":"20","email":"deepakreddy6@gmail.com"},{"name":"name 21","priority":19,"seat_number":61,"description":"description 21","id":"21"},{"name":"tina","priority":"1","seat_number":"20","description":"test based template","id":"22","email":"kiran.more170498@gmail.com"},{"name":"test","priority":"1","seat_number":"32","description":"test based dashboard","id":"23","email":"kiran.more170498@gmail.com"},{"name":"name 24","priority":95,"seat_number":13,"description":"description 24","id":"24"},{"name":"name 25","priority":59,"seat_number":53,"description":"description 25","id":"25"},{"name":"name 26","priority":62,"seat_number":7,"description":"description 26","id":"26"},{"name":"name 27","priority":41,"seat_number":92,"description":"description 27","id":"27"},{"name":"name 28","priority":28,"seat_number":41,"description":"description 28","id":"28"},{"name":"name 29","priority":69,"seat_number":65,"description":"description 29","id":"29"},{"name":"name 30","priority":76,"seat_number":10,"description":"description 30","id":"30"},{"name":"name 31","priority":17,"seat_number":46,"description":"description 31","id":"31"},{"name":"name 32","priority":52,"seat_number":1,"description":"description 32","id":"32"},{"name":"name 33","priority":29,"seat_number":85,"description":"description 33","id":"33"},{"name":"name 34","priority":56,"seat_number":92,"description":"description 34","id":"34"},{"name":"name 35","priority":66,"seat_number":68,"description":"description 35","id":"35"},{"name":"name 36","priority":29,"seat_number":58,"description":"description 36","id":"36"},{"name":"name 37","priority":91,"seat_number":2,"description":"description 37","id":"37"}];
      // dispatch({ type: "DATA", payload: dummyData });
      navigate('\dashboard');
      }

  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const re = /^(?=.*[@_$])(?=.*[a-zA-Z0-9])[a-zA-Z0-9@_$]{6,}$/;
    if (!re.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one special character (@, $, _)"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (!emailError && !passwordError) {
      setEmailError && setEmailError ("login Failed")
    }
  };

    
  return (
    <div className="login">
    <form> <div className='loginheader'><h3>LOGIN</h3></div>
                <div className="mb-3"> 
                
      <label>
        Email ID</label>
        <input
          type="email"
           className={`form-control ${emailError ? "is-invalid" : ""}`}
          value={email}
          placeholder="Enter email" required 
          onChange={(e) => setEmail(e.target.value)} onSubmit={handleSubmit}
          onBlur={validateEmail}
          
        />
         {emailError && <span className="invalid-feedback">{emailError}</span>} 
        </div>
      
      <div className="mb-3">
      <label>
        Password
        </label>
        <input
          type="password"
          className={`form-control ${passwordError ? "is-invalid" : ""}`}
          value={password}
          placeholder="Enter password" required
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
          
        />
         {passwordError && <span className="invalid-feedback">{passwordError}</span>} 
      
    </div>
    <div className="d-grid">
    <button type="submit" className="btn btn-primary" onClick={handleLogin}
    disabled={(!email || !password )} >
                        Submit
                    </button>
      </div>

      <p></p>
                <p className="account">
                   <label>Don't have an account?</label> <a href="/sign-up">Register Here</a>
                </p>

    </form>
    </div>
  );
}

export default Login;
