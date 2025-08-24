import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FooterCA from '../Components/FooterCA/FooterCA'
import BottomFooter from '../Components/BottomFooter/BottomFooter'
import './Style/DonateNow.css';
import axios from 'axios';

const DonateNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    paymentMethod: "paystack" // default to Paystack since that's what we support
  });

  useEffect(() => {
    document.body.classList.add('donate-now-page-body');
    return () => {
      document.body.classList.remove('donate-now-page-body');
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call backend to initialize Paystack payment
      const res = await axios.post("http://localhost:5000/api/donate", {
        name: formData.name,
        email: formData.email,
        amount: formData.amount
      });

      if (res.data.status === true) {
        // Redirect user to Paystack checkout
        window.location.href = res.data.data.authorization_url;
      } else {
        alert("Payment initialization failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="donate-wrapper">
        <div className="donate-header">
          <h1>Support Our Mission</h1>
          <p>Your donation helps us create a brighter future for children and communities in need.</p>
        </div>

        <form className="donate-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com" 
              required 
            />
          </div>

          <div className="form-group">
            {/* Added Naira sign */}
            <label>Donation Amount (₦)</label>
            <input 
              type="number" 
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount in Naira" 
              required 
              min="100" // avoid zero/negative amounts
            />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select 
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="paystack">Paystack</option>
              {/* In future you can add more like Flutterwave, Paypal etc. */}
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
