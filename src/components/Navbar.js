import React from 'react';
import { Link } from 'react-router-dom/dist';



export default function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            learn stock market
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/menu">
                  menu
                </Link>
              </li>
              
              {localStorage.getItem("authToken") ? (
                (
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      my diary
                    </Link>
                  </li>
                ,
                (
                  <div className="d-flex">
                    <div
                      className="btn bg-light text-danger mx-2"
                      onClick={handleLogout}
                    >
                      Log out
                    </div>
                  </div>
                ))
              ) : (
                <div className="d-flex">
                  <Link className="nav-link" to="/login">
                    Log In
                  </Link>
                  <Link className="nav-link " to="/signup">
                    Sign Up
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
