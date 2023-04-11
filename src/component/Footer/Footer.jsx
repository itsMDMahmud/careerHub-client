import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="div-one footer-common">
                <h2>CareerZone</h2>
                <p>“Whatever your life's work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better.”  —Martin Luther King ...</p>
                <img className='footer-img' src="https://i.ibb.co/2tn32Wq/Group-9969.png" alt="" />
            </div>
            <div className="div-two footer-common">
                <h3>Company</h3>
                <p>About us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>
            </div>
            <div className="div-three footer-common">
                <h3>Product</h3>
                <p>Prototype</p>
                <p>Plan & pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div className="div-four footer-common">
                <h3>Support</h3>
                <p>Help desk</p>
                <p>Sales</p>
                <p>Become a partner</p>
                <p>Developers</p>
            </div>
            <div className="div-five footer-common">
                <h3>Mahmud</h3>
                <p>01866 333 345</p>
                <p>itsmdmahmud@gmail.com</p>                
            </div>
        </div>
    );
};

export default Footer;