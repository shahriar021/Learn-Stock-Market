import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const Navi = useNavigate();

    const [cerdinal, setCerdinal] = useState({
      email: "",
      password: "",
    });

  const handleLogin=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/userlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        email: cerdinal.email,
        password: cerdinal.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      alert("success");
      localStorage.setItem("userEmail", cerdinal.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      Navi("/");
    }
    if (!json.success) {
      alert("try again with correct details");
    }

  }


  const onChange = (e) => {
    setCerdinal({ ...cerdinal, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <form onSubmit={handleLogin}>
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
