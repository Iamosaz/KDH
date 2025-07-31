import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FooterCA from '../Components/FooterCA/FooterCA'
import BottomFooter from '../Components/BottomFooter/BottomFooter'
import './Style/DonateNow.css';
import { useEffect } from 'react';

const DonateNow = () => {

   useEffect(() => {
      document.body.classList.add('donate-now-page-body');
      return () => {
        document.body.classList.remove('donate-now-page-body');
      };
    }, []);
  
  return (
      <>
      <Navbar />

      <div className="donate-wrapper">
        <div className="donate-header">
          <h1>Support Our Mission</h1>
          <p>Your donation helps us create a brighter future for children and communities in need.</p>
        </div>

        <form className="donate-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Full Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Donation Amount ($)</label>
            <input type="number" placeholder="Enter amount" required />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select required>
              <option value="">-- Select Payment Method --</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          <button type="submit" className="donate-btn">Donate Now</button>
        </form>
      </div>

      <FooterCA />
      <BottomFooter />
    </>
  )
}

export default DonateNow
