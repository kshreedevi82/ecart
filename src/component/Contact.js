import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import axios from 'axios';


export default function() {
  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
    message: ''
  });

  const { name,phone, email, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3002/api/contact', formData)
      .then(response => {
        alert(response.data.message);
        setFormData({ name: '',phone:'', email: '', message: '' });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };
 
  return (
    <div>
      <img src="https://cdn.pixabay.com/photo/2017/12/02/15/17/contact-us-2993109_960_720.jpg" height={400} width={1535}/>
      <form onSubmit={handleSubmit}> <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Name"name='name'  value={name}   onChange={handleChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Phone Number:</label>
  <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Phone Number" name='phone' value={phone}   onChange={handleChange}/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Email address:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email'  value={email}   onChange={handleChange} />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" name='message'  value={message}   onChange={handleChange}></textarea><br/>
<button class="bt " type="submit">Submit</button></div></form>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0089757561486!2d77.90715407484134!3d12.971277287344094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0bc49b3b52ff%3A0x7ecbaa58e4ad646c!2sFlipkart%20-%20Malur%20Warehouse!5e0!3m2!1sen!2sin!4v1723016706898!5m2!1sen!2sin" width="900" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<footer class="section-p1">
            <div class="col">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/0f3985181079177.Y3JvcCw4MDgsNjMyLDAsMA.jpg" width={100} height={100}/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> kolar, karnataka 563160</p>
            <p><strong>Phone:</strong>+91 8765432197</p>
            <p><strong>Email:</strong>helo@ekart.com</p>
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
