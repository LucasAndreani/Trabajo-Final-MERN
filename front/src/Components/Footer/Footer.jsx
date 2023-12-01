import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='left-section-footer'>
            <h2>Constructor</h2>
            <p>Victory Road, Route 32 <br/>
            V6B 132 Kanto</p>
    </div>
    <div className='middle-section-footer'>
        <div className='middle-column'>
            <p>Corporate sales</p>
            <p>Feedback</p>
            <p>Jobs</p>
            <p>News</p>
            <p>Sales Rules</p>
            <p>For partners</p>
        </div>
        <div className='middle-column'>
            <p>Bonus program</p>
            <p>Gift Сards</p>
            <p>Bill Payment Verification</p>
            <p>Loans</p>
            <p>Delivery</p>
            <p>Service centers</p>
        </div>
          <div className='middle-column'>
            <p>How to place an order</p>
            <p>Ways of payment</p>
            <p>Exchange and return of goods</p>
            <p>Warranty service</p>
            <p>Order status</p>
            <p>Knowledge base</p>
        </div>
    </div>
    <div className='right-section-footer'>
            <p>2030 Comapny. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
    </div>
  </footer>
  )
}

export default Footer