import React from 'react'
import Card from './Card';
import list from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Shop({handleClick}) {

  return (
    <div>
        <h1>Product List</h1>
      <h2>Shop Now</h2>
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    <footer class="section-p1">
            <div class="col">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/0f3985181079177.Y3JvcCw4MDgsNjMyLDAsMA.jpg" width={100} height={100}/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> kolar, karnataka 563160</p>
            <p><strong>Phone:</strong>+91 8765432197</p>
            <div class="follow">
                <h4>Follow Us</h4>
                <div class="icon">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                                <a href=""><FontAwesomeIcon icon={faTelegram} size="2x" /></a>
                                <a href=""><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>About</h4>
            <Link className="nav-link" to="/about">About Us</Link>
         
            <Link className="nav-link" to="/term">Terms and Conditions</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </div>
        
            <div class="Copyright">
                <p><strong>&copy;</strong>2024 Ecart. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}
