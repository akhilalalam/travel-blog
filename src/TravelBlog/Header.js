import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className=" container-fluid">
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        <strong>Travel & <span className='text-danger'>Blog</span></strong>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <u1 className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="home" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/reviews">Review</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </u1>
    </div>
  </div>
</nav>
        </header>
    )
}

export default Header