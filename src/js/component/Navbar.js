import React from 'react'
import thragullLogo from '../../img/favicon.jpg'

const Navbar = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg bg-secondary'>
      <div className='container-fluid'>
        <a className='navbar-brand text-white ms-lg-3'><img className='rounded-5 me-2' src={thragullLogo}/><span className='fs-4 align-middle fw-bold'>THRAGULL</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSelector" aria-controls="navbarSelector" aria-expanded="false" aria-label="Toggle Navigator"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSelector">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className='nav-item'>
              <a className="nav-link text-white active text-start ms-5 ms-lg-0" aria-current="page" href="#">Home</a>
            </li>
            <li className='nav-item'>
              <a className="nav-link text-white text-start ms-5 ms-lg-0" aria-current="page" href="#">About</a>
            </li>
            <li className='nav-item'>
              <a className="nav-link text-white text-start ms-5 ms-lg-0" aria-current="page" href="#">Services</a>
            </li>
            <li className='nav-item'>
              <a className="nav-link text-white text-start ms-5 ms-lg-0 me-lg-3" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar