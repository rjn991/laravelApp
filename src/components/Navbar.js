import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
        <p class="navbar-brand" href="#">Student Info</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
            <p class="nav-link active" aria-current="page" href="#">Input data</p>
            <p class="nav-link" href="#">View data</p>
        </div>
        </div>
    </div>
    </nav>
  )
}
