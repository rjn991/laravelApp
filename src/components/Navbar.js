import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className="container-fluid">

        <p className="navbar-brand" href="#"><i className="fa-sharp fa-solid fa-graduation-cap"></i> Student Info</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <p className="nav-link active" aria-current="page" href="#">Input data</p>
            <p className="nav-link" href="#">View data</p>
        </div>
        </div>
    </div>
    </nav>
  )
}
