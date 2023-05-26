import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

export default function Signup() {
    const Navi=useNavigate()

    const [cerdinal,setCerdinal]=useState({name:"",email:"",password:""})
    const handlesubit=async(e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/Userdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: cerdinal.name,
            email: cerdinal.email,
            password: cerdinal.password,
          }),
        });
        const json = await response.json()
        console.log(json)

        if(json.success){
            
            alert("success")
            Navi("/login")
        }
        if (!json.success) {
          
          alert("try again with correct details");
          
        }

    }

    const onChange=(e)=>{
        setCerdinal({...cerdinal,[e.target.name]:e.target.value})
    }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form onSubmit={handlesubit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={cerdinal.name}
            onChange={onChange}
            
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={cerdinal.email}
            onChange={onChange}
            
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            
            value={cerdinal.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
