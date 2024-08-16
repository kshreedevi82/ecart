import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



export default function Navbar({ setShow, size }) {
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-dark">
  <div class="container-fluid">
    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/0f3985181079177.Y3JvcCw4MDgsNjMyLDAsMA.jpg" width={100} height={70}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><Link className="nav-link" to="/shop">Shop</Link></li>
           
            <li><hr class="dropdown-divider"/></li>
            <li><Link className="nav-link" to="/term">Terms and Conditions</Link></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </li>
        
       
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    
  )
}
