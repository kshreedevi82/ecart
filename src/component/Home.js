import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" height="600"/>
        
      </div>

      <div className="carousel-item">
        <img src="https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" height="600"/>
        
      </div>
      <div class="carousel-item">
        <img src="https://plus.unsplash.com/premium_photo-1683288295814-84a199da83d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" height="600"/>
        
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
    <h1 >Customer Satisfaction</h1> 
    <section id="feature" class="section-p1">
   
          <div class="fe-box">
              <img src="https://img.freepik.com/free-vector/free-shipping-concept-illustration_114360-2978.jpg" width="100px" height="100px"/>
              <h6>free shipping</h6>
          </div>
          <div class="fe-box">
              <img src="https://t4.ftcdn.net/jpg/04/35/22/71/360_F_435227152_bDpZMrJhzuqCvW1TxaucvwJN9o6fGp3h.jpg" width="100px" height="100px"/>
              <h6>secure checkout</h6>
          </div>
          <div class="fe-box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhhpAZ2rpSu2k4FoOTpxBhjKu9GKz_exwvA&s" width="100px" height="100px"/>
              <h6>Save Money</h6>
          </div>
          <div class="fe-box">
              <img src="https://cdn.pixabay.com/photo/2016/02/24/17/23/support-1220344_640.png" width="100px" height="100px"/>
              <h6>Support</h6>
          </div>

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

      
      </>
  )
}
