import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className="container-fluid">

        <p className="navbar-brand" href="#"><i className="fa-sharp fa-solid fa-graduation-cap"></i> Student Info</p>
        <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/">Input data</NavLink>
            <NavLink className="nav-link" to="/view">View data</NavLink>
        </div>
        </div>
    </div>
    </nav>
  )
}
