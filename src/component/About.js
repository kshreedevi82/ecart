import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div class="accordion" id="accordionExample">
      <img src="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?w=1060&t=st=1723796527~exp=1723797127~hmac=200b5f9475af3683c5b7687501cf67bee67f51276c911054f436c9a8c1672843" height={400} width={1535}/>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Ecart is a story of two siblings
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Ecart is a story of two siblings who dreamt of building something that supported customer’s growing challenges and logistical needs.</strong> 

With a mission to bridge the service gap in the logistics industry Ecart was founded in 2020 by Ganesh Kumar and Nayana k, a Chartered Accountant duo (read: non-tech guys). From humble beginnings,Ecart has grown into a technology platform that helps businesses of all sizes to ship their products seamlessly – a preferred choice for over 25000 Indian businesses from across the county. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Our offerings</strong> have grown over the years to include solutions within the logistics universe required for the businesses we serve, all while maintaining customer service as our foremost priority.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Dream 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Our dream is to empower customers and businesses to buy and sell products irrespective of their geography.</strong> We believe our dreams will allow entrepreneurs to chase theirs, and customers to become a key part of it.  As India works towards its 5 trillion dollar goal, we intend to be the enablers driving this vision. We’ve seen small businesses i.e. Cubs living their aspirations to become Lion brands, and we want to provide them the access to world class logistics solutions. It’s to this end that we will continue to provide best-in-class technology and customer support to ensure that businesses, agnostic of their size, have the necessary tools and support to thrive in the competitive business landscape.
      </div>
    </div>
  </div>
  <h2>Meet Our Team</h2>
  <section id="team">
        <div class="team-container">
            <div class="team-member">
                <img src="https://cdn-icons-png.flaticon.com/512/180/180644.png" alt="Team Member 1"/>
                <h3>Somanathan</h3>
                <p>General Manager</p>
            </div>
            <div class="team-member">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYN4scLAOk6JcRBGzBZrq9N4zSHo6oOB_aycIUGb6FlF48fK8XsTr1a6AJZgMuYrduBeY&usqp=CAU" alt="Team Member 2"/>
                <h3>Ganesh Kumar</h3>
                <p>CEO</p>
            </div>
            <div class="team-member">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrGCOwyQIqNz24Fxp6m2M4VwQlamCyOd9xxQhyyJ_0IY2UGhzBe6uMnWO-17p-GCOTRE&usqp=CAU" alt="Team Member 3"/>
                <h3>Nayana k</h3>
                <p> Co-founder</p>
            </div>
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


</div>
  )
}
