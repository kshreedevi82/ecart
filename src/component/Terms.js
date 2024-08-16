import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function 
() {
  return (
    <div>
        <h1>Terms and conditions</h1>
        <section>
            <i >'Ecart's' Terms and Conditions Policy
                Welcome to 'Ecart' These terms and conditions outline the rules and regulations for the use of Ecart’s Website.
                
                <p>sara is located at: , Laksandra 15th cross,II main Bangalore.</p>
                
                <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Ecart’s website if you do not accept all of the terms and conditions stated on this page.
                
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: Client, You and Your refers to you, the person accessing this website and accepting the Company’s terms and conditions.</p> The Company, Ourselves, We, Our and Us, refers to our Company. Party, Parties, or Us, refers to both the Client and ourselves, or either the Client or ourselves.
                
                All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of (Address).
                
                Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </i>
                </section>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Accept Terms and Condition
  </label>
</div>
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
