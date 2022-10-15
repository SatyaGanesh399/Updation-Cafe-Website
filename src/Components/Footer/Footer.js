import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div className="whole-footer">
      <div className="footer-left">
        <div className="footer-left-left">
          <p className="info-link-service">ABOUT US</p>
          <p className="info-link">Our Story</p>
          <p className="info-link">Contact Us</p>
          <p className="info-link">Locate Stores</p>
        </div>
        <div className="footer-left-right">
          <p className="info-link-service">OFFERS & REWARDS</p>
          <p className="info-link">Coffee Club</p>
          <p className="info-link">Coffee Coupons</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-left">
          <p className="info-link-service">CUSTOMER CARE</p>
          <p className="info-link">Track Order</p>
          <p className="info-link">Shipping Policy</p>
          <p className="info-link">Terms and Conditions</p>
          <p className="info-link">Privacy Policy</p>
          <p className="info-link">FAQs</p>
        </div>
        <div className="footer-right-right">
            <div className="signup-text">
          <p className="info-link-service">SIGN UP FOR OUR NEWSLETTER</p>
          <p>
            For Coffee Colabarations, <br /> Please Contact us.
          </p>
          <input type="" name="email-id" value="" placeholder="Please Email Address" className="email-address"/>
          <span class="material-symbols-outlined arrow-symbol">arrow_forward</span>
            </div>
            <div className="social-media-icons">
                <p className="follow-us">FOLLOW US</p>
                <div className="social-media">
                <i class="fa-brands fa-whatsapp icon"></i>
                <i class="fa-brands fa-facebook icon"></i>
                <i class="fa-brands fa-twitter icon"></i>
                <i class="fa-brands fa-telegram icon"></i>
                <i class="fa-brands fa-linkedin icon"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
