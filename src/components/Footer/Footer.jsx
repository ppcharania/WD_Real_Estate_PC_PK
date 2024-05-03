import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            <div className="f-left flexColStart">
                <img src="./logo2.png" width={120} alt="" />
                <span>
                Find a House, Make it your Home.
                </span>
            </div>
            <div className="f-right flexColStart">
                <span className='primaryText'>
                    Information
                </span>
                <span className='secondaryText'>
                    145 Borivali, Mumbai, India
                </span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
