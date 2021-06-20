import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container footer-area mt-4">
            <div className="row">
                <div className="col-md-4">
                    <h5>Job Lagbe</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nobis pariatur rem illo, officia odio eius nisi libero ullam minus illum mollitia voluptatibus esse dolor vitae, molestiae modi aut officiis exercitationem possimus dolorem alias voluptas!</p>
                </div>
                <div className="col-md-2 footer-ul">
                    <ul>
                        <li className="footer-title">Job Lagbe</li>
                        <li>Career</li>
                        <li>Join us</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h6>Contact Us</h6>
                    <p>46/A,South Banasree<br/> Dhaka South-1200</p>
                    <p className="mt-2"><strong>Email: </strong>joblagbe@gmail.com</p>
                    <p className="mt-2"><strong>Website: </strong>www.joblagbe.com</p>
                </div>
            </div>
            <div className="copyright"><p>&copy; Job Lagbe || All rights reserved </p></div>
        </div>
    );
};

export default Footer;